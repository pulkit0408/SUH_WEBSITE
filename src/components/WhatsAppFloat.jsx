import axios from 'axios';
import { AlertCircle, CheckCircle, Mail, MessageCircle, Phone, Send, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhatsAppFloat = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showUserForm, setShowUserForm] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [sessionStatus, setSessionStatus] = useState(null);
  const [serviceType, setServiceType] = useState('general_support');
  const [currentStage, setCurrentStage] = useState('collecting_details');
  const [detectedServices, setDetectedServices] = useState([]);
  const [connectionError, setConnectionError] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // API configuration - Update this URL to match your backend
  const API_BASE_URL = 'https://ai-agent-frontend-wheat.vercel.app/api/v1';

  // Configure axios defaults
  useEffect(() => {
    axios.defaults.timeout = 30000;
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    // Add request interceptor for error handling
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error);
        setConnectionError(true);
        setTimeout(() => setConnectionError(false), 5000);
        return Promise.reject(error);
      }
    );
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Focus input when chatbot opens
  useEffect(() => {
    if (showChatbot && !showUserForm && !isLoading) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [showChatbot, showUserForm, isLoading]);

  // Load session from localStorage if exists
  useEffect(() => {
    const savedSession = localStorage.getItem('support_session');
    if (savedSession) {
      try {
        const sessionData = JSON.parse(savedSession);
        if (sessionData.sessionId && sessionData.userDetails) {
          setSessionId(sessionData.sessionId);
          setUserDetails(sessionData.userDetails);
          setServiceType(sessionData.serviceType || 'general_support');
          setCurrentStage(sessionData.currentStage || 'collecting_details');
          setShowUserForm(false);
          loadSessionHistory(sessionData.sessionId);
        }
      } catch (error) {
        console.error('Error loading saved session:', error);
        localStorage.removeItem('support_session');
      }
    }
  }, []);

  // WhatsApp contact handler
  const handleWhatsAppClick = () => {
    const phoneNumbers = ["919211056355", "917596818126"];
    const message = "Hi! I'd like to get connected for technical support.";

    phoneNumbers.forEach((phoneNumber) => {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!userDetails.name.trim()) {
      errors.name = 'Name is required';
    } else if (userDetails.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!userDetails.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!userDetails.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(userDetails.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Load session history
  const loadSessionHistory = async (sessionId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/support/session/${sessionId}`);

      if (response.data && response.data.conversationHistory) {
        const messages = response.data.conversationHistory.map(msg => ({
          role: msg.role,
          message: msg.message,
          timestamp: new Date(msg.timestamp),
          stage: msg.stage,
          isError: msg.isError || false
        }));
        setChatMessages(messages);
        setServiceType(response.data.serviceType || 'general_support');
        setCurrentStage(response.data.currentStage || 'collecting_details');
        setSessionStatus(response.data.status);

        if (response.data.detectedServices) {
          setDetectedServices(response.data.detectedServices);
        }
      }
    } catch (error) {
      console.error('Error loading session history:', error);
      if (error.response?.status === 404) {
        localStorage.removeItem('support_session');
        resetChat();
      } else {
        setChatMessages([{
          role: 'assistant',
          message: 'Sorry, I had trouble loading your previous conversation. Let\'s start fresh! 🔄',
          timestamp: new Date(),
          isError: true
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Start chat session
  const startChatSession = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setConnectionError(false);

    try {
      const response = await axios.post(`${API_BASE_URL}/support/start-session`, {
        name: userDetails.name.trim(),
        email: userDetails.email.trim(),
        phoneNumber: userDetails.phone.trim()
      });

      if (response.data && response.data.sessionId) {
        const sessionData = {
          sessionId: response.data.sessionId,
          userDetails: userDetails,
          serviceType: response.data.serviceType || 'general_support',
          currentStage: response.data.stage || 'collecting_details'
        };

        localStorage.setItem('support_session', JSON.stringify(sessionData));

        setSessionId(response.data.sessionId);
        setServiceType(response.data.serviceType || 'general_support');
        setCurrentStage(response.data.stage || 'collecting_details');
        setSessionStatus('active');

        setChatMessages([{
          role: 'assistant',
          message: response.data.message,
          timestamp: new Date(),
          stage: response.data.stage
        }]);

        setShowUserForm(false);
      }
    } catch (error) {
      console.error('Error starting chat session:', error);
      let errorMessage = 'Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly via WhatsApp.';

      if (error.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment before trying again.';
      } else if (error.response?.status === 400) {
        errorMessage = error.response.data?.error || 'Please check your details and try again.';
      } else if (error.code === 'NETWORK_ERROR') {
        errorMessage = 'Network connection issue. Please check your internet connection.';
      }

      setChatMessages([{
        role: 'assistant',
        message: errorMessage,
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Send message
  const sendMessage = async () => {
    if (!inputMessage.trim() || !sessionId || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    const userMsgObj = {
      role: 'user',
      message: userMessage,
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, userMsgObj]);

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/support/continue-chat`, {
        sessionId: sessionId,
        message: userMessage
      });

      if (response.data && response.data.message) {
        const assistantMsg = {
          role: 'assistant',
          message: response.data.message,
          timestamp: new Date(),
          stage: response.data.stage,
          serviceType: response.data.serviceType
        };

        setChatMessages(prev => [...prev, assistantMsg]);

        // Update session info
        if (response.data.stage) setCurrentStage(response.data.stage);
        if (response.data.serviceType) setServiceType(response.data.serviceType);
        if (response.data.status) setSessionStatus(response.data.status);
        if (response.data.detectedServices) setDetectedServices(response.data.detectedServices);

        // Update localStorage
        const savedSession = JSON.parse(localStorage.getItem('support_session') || '{}');
        savedSession.serviceType = response.data.serviceType || serviceType;
        savedSession.currentStage = response.data.stage || currentStage;
        localStorage.setItem('support_session', JSON.stringify(savedSession));
      }
    } catch (error) {
      console.error('Error sending message:', error);
      let errorMessage = 'Sorry, I encountered an error. Please try again or contact us via WhatsApp.';

      if (error.response?.status === 404) {
        errorMessage = 'Your session has expired. Please start a new conversation.';
        localStorage.removeItem('support_session');
        setTimeout(() => resetChat(), 2000);
      } else if (error.response?.status === 429) {
        errorMessage = 'You\'re sending messages too quickly. Please wait a moment.';
      } else if (error.code === 'NETWORK_ERROR') {
        errorMessage = 'Network connection issue. Please check your internet connection.';
      }

      setChatMessages(prev => [...prev, {
        role: 'assistant',
        message: errorMessage,
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // End session
  const endSession = async () => {
    if (!sessionId) return;

    try {
      await axios.put(`${API_BASE_URL}/support/session/${sessionId}/end`, {
        sessionId: sessionId
      });

      setSessionStatus('resolved');
      localStorage.removeItem('support_session');

      setChatMessages(prev => [...prev, {
        role: 'assistant',
        message: '✅ Session ended successfully. Thank you for using our support! Feel free to start a new session anytime.',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error ending session:', error);
    }
  };

  // Submit feedback
  const submitFeedback = async (rating, feedback) => {
    if (!sessionId) return;

    try {
      await axios.put(`${API_BASE_URL}/support/session/${sessionId}/feedback`, {
        rating,
        feedback,
        wouldRecommend: rating >= 4,
        improvements: feedback
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (showUserForm) {
        startChatSession();
      } else {
        sendMessage();
      }
    }
  };

  // Reset chat
  const resetChat = () => {
    setChatMessages([]);
    setSessionId(null);
    setUserDetails({ name: '', email: '', phone: '' });
    setShowUserForm(true);
    setFormErrors({});
    setInputMessage('');
    setServiceType('general_support');
    setCurrentStage('collecting_details');
    setSessionStatus(null);
    setDetectedServices([]);
    localStorage.removeItem('support_session');
  };

  // Close chatbot
  const closeChatbot = () => {
    setShowChatbot(false);
    if (!sessionId) {
      setTimeout(() => resetChat(), 300);
    }
  };

  // Service type labels
  const getServiceTypeLabel = (type) => {
    const labels = {
      'web_development': 'Web Development',
      'mobile_development': 'Mobile Development',
      'digital_marketing': 'Digital Marketing',
      'cloud_solutions': 'Cloud Solutions',
      'data_analytics': 'Data & Analytics',
      'cybersecurity': 'Cybersecurity',
      'ui_ux_design': 'UI/UX Design',
      'consulting': 'Digital Consulting',
      'general_support': 'General Support',
      'general_inquiry': 'General Inquiry'
    };
    return labels[type] || 'Support';
  };

  // Stage labels
  const getStageLabel = (stage) => {
    const labels = {
      'collecting_details': 'Getting Started',
      'identifying_needs': 'Understanding Needs',
      'providing_solutions': 'Providing Solutions',
      'completed': 'Completed'
    };
    return labels[stage] || 'In Progress';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Connection Error Toast */}
      {connectionError && (
        <div className="absolute bottom-20 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 shadow-lg max-w-sm">
          <div className="flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">Connection issue. Please try again.</span>
          </div>
        </div>
      )}

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="absolute bottom-20 right-0 w-96 h-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col mb-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Digital Solutions Chat
              </h3>
              <div className="text-xs opacity-90 flex items-center space-x-2 mt-1">
                {sessionId ? (
                  <>
                    <span className="bg-emerald-400 bg-opacity-30 px-2 py-1 rounded text-xs">
                      {getServiceTypeLabel(serviceType)}
                    </span>
                    <span>•</span>
                    <span>{getStageLabel(currentStage)}</span>
                    {sessionStatus === 'active' && (
                      <>
                        <span>•</span>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                          Active
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <span>We're here to help with all your digital needs! 💻</span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {sessionId && sessionStatus === 'active' && (
                <button
                  onClick={endSession}
                  className="text-white hover:bg-emerald-600 rounded px-2 py-1 transition-colors text-xs"
                  title="End Session"
                >
                  End
                </button>
              )}
              <button
                onClick={closeChatbot}
                className="text-white hover:bg-emerald-600 rounded-full p-1 transition-colors"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* User Details Form */}
          {showUserForm && (
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-sm font-semibold mb-3 text-gray-800 flex items-center">
                <User className="w-4 h-4 mr-2 text-emerald-600" />
                Let's get started! Please share your details:
              </h4>
              <div className="space-y-3 flex-1">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name*"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                      onKeyPress={handleKeyPress}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        formErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email*"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                      onKeyPress={handleKeyPress}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Your Phone Number*"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
                      onKeyPress={handleKeyPress}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        formErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <button
                  onClick={startChatSession}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Starting Chat...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Digital Solutions Chat</span>
                      <MessageCircle className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By starting a chat, you agree to our terms of service and privacy policy.
                  We provide comprehensive digital solutions including web development,
                  mobile apps, marketing, and more.
                </p>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {!showUserForm && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                {detectedServices.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-xs font-medium text-blue-800 mb-1">Detected Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {detectedServices.slice(0, 3).map((service, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {getServiceTypeLabel(service.service)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-emerald-500 text-white rounded-br-md'
                          : msg.isError
                          ? 'bg-red-100 text-red-800 rounded-bl-md border border-red-200'
                          : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                      {msg.stage && !msg.isError && (
                        <p className="text-xs opacity-70 mt-2 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {getStageLabel(msg.stage)}
                        </p>
                      )}
                      <p className="text-xs opacity-60 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200">
                      <div className="flex space-x-1 items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <span className="ml-2 text-xs text-gray-500">Alex is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={sessionStatus === 'resolved' ? 'Session ended' : 'Ask about our digital services...'}
                    disabled={isLoading || sessionStatus === 'resolved'}
                    className="flex-1 p-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-100 transition-all"
                    maxLength={1000}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || !inputMessage.trim() || sessionStatus === 'resolved'}
                    className="bg-emerald-500 text-white p-3 rounded-full hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[48px] shadow-lg"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {sessionId && (
                  <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                    <span className="flex items-center">
                      Session: {sessionId.slice(-8)}
                      <span className="mx-2">•</span>
                      {getServiceTypeLabel(serviceType)}
                    </span>
                    {sessionStatus && (
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        sessionStatus === 'active' ? 'bg-green-100 text-green-800' :
                        sessionStatus === 'resolved' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sessionStatus}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Tooltip */}
        <div
          className={`bg-white rounded-lg shadow-lg px-4 py-3 transition-all duration-300 ${
            showMessage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <p className="text-gray-800 text-sm font-medium whitespace-nowrap">
            Get Digital Solutions Support! 💻
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Web • Mobile • Marketing • Cloud & More
          </p>
        </div>

        {/* Chatbot Button */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
          className={`text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative ${
            showChatbot ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
          }`}
          aria-label="Open digital solutions chat"
        >
          {sessionId && (
            <div className="absolute -top-1 -right-1 bg-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              ✓
            </div>
          )}
          {showChatbot ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
