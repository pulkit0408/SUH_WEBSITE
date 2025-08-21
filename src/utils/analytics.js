// src/utils/analytics.js
// Google Analytics 4 setup for SUH TECH

// Replace with your actual GA4 tracking ID
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

// Initialize GA4
export const initGA = () => {
  // Skip if GA is already initialized or in development
  if (typeof window === 'undefined' || window.gtag || process.env.NODE_ENV === 'development') {
    return;
  }

  try {
    // Create gtag script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      // Enhanced ecommerce and user privacy
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    console.log('🔍 Google Analytics initialized');
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
  }
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });

    // Also send a page_view event
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.href,
      page_path: url
    });
  } catch (error) {
    console.warn('Page view tracking failed:', error);
  }
};

// Track events
export const trackEvent = (action, category = 'engagement', label = '', value = null) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.warn('Event tracking failed:', error);
  }
};

// Track conversions (form submissions, calls, etc.)
export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', 'engagement', conversionType, value);

  // Send conversion to Google Ads if configured
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXX', // Replace with your conversion ID
        'value': value,
        'currency': 'INR'
      });
    } catch (error) {
      console.warn('Conversion tracking failed:', error);
    }
  }
};

// Track business-specific events for SUH TECH
export const trackBusinessEvent = {
  // Contact form submission
  contactForm: () => trackConversion('contact_form_submit'),

  // Phone number click
  phoneClick: () => trackEvent('click', 'contact', 'phone_number'),

  // Email click
  emailClick: () => trackEvent('click', 'contact', 'email'),

  // WhatsApp click
  whatsappClick: () => trackEvent('click', 'contact', 'whatsapp'),

  // Service page views
  serviceView: (serviceName) => trackEvent('view', 'services', serviceName),

  // Quote request
  quoteRequest: () => trackConversion('quote_request'),

  // Career application
  careerApplication: () => trackConversion('career_application'),

  // Newsletter signup
  newsletterSignup: () => trackEvent('signup', 'newsletter', 'footer'),

  // File download (brochure, portfolio, etc.)
  fileDownload: (fileName) => trackEvent('download', 'resource', fileName),

  // External link clicks
  externalLink: (linkName) => trackEvent('click', 'external', linkName),

  // Social media clicks
  socialMedia: (platform) => trackEvent('click', 'social', platform)
};

// Track Core Web Vitals
export const trackWebVitals = () => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Track LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            window.gtag('event', 'LCP', {
              custom_parameter_1: 'core_web_vitals',
              value: Math.round(entry.startTime)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP tracking failed:', error);
    }
  }
};

// Debug function to check if analytics is working
export const debugAnalytics = () => {
  if (typeof window === 'undefined') {
    console.log('🔍 Analytics Debug: Server-side, skipping');
    return;
  }

  console.log('🔍 Analytics Debug Info:');
  console.log('- GA_TRACKING_ID:', GA_TRACKING_ID);
  console.log('- window.gtag exists:', !!window.gtag);
  console.log('- dataLayer exists:', !!window.dataLayer);
  console.log('- Environment:', process.env.NODE_ENV);

  if (window.gtag) {
    console.log('✅ Analytics is initialized');
  } else {
    console.log('❌ Analytics is not initialized');
  }
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackConversion,
  trackBusinessEvent,
  trackWebVitals,
  debugAnalytics
};
