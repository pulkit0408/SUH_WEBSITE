import { useEffect, useState } from "react";

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@suhtech.top";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+91 9211056355";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/suh-tech/", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/MqzbCmPMGBdvpxTd9", "_blank");
  };

  return (
    <section id="contact" className="relative py-10   px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In{" "}
            <span
              className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block animate-pulse"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease-in-out infinite",
              }}
            >
              Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's create something amazing
            together.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 ">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Send us a message
              </h2>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 text-white rounded-2xl font-semibold transition-all duration-300 shadow-xl relative overflow-hidden group hover:scale-105 hover:-translate-y-1 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0"></div>
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] ">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Creative Team at Work"
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Let's Create Together
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">
                        From concept to completion, our team is dedicated to
                        bringing your vision to life with creativity and
                        precision.
                      </p>

                      <div className="flex space-x-6">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            50+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300">
                            Projects
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            24/7
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300">
                            Support
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            100%
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300">
                            Satisfaction
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Email Card */}
          <div
            onClick={handleEmailClick}
            className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 text-sm">info@suhtech.top</p>
          </div>

          {/* Phone Card */}
          <div
            onClick={handleCallClick}
            className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 text-sm">+91 9211056355</p>
          </div>

          {/* LinkedIn Card */}
          <div
            onClick={handleLinkedInClick}
            className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Connect with us</p>
          </div>

          <div
            onClick={handleLocationClick}
            className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300 text-sm">
              Habitech crystal mall, knowledge park III, 4th floor,D-8, Greater
              Noida
            </p>
          </div>
        </div>
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We're here to help you every step of the way. From initial
              consultation to final delivery, our team ensures your project
              exceeds expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUsPage;
