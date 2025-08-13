import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-inherit text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Replace with your actual logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-bold">SUH Tech</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering innovative, high-quality digital solutions with excellence,
              creativity, and timely delivery since 2024.
            </p>
            <div className="text-gray-400 text-xs">
              <p>SUH TECH PRIVATE LIMITED</p>
              <p>Incorporated: February 13, 2024</p>
            </div>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Vision</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              To be the leading technology partner, empowering businesses through
              innovative digital solutions and exceptional service delivery.
            </p>
            <h5 className="text-md font-medium text-pink-400 mt-3">Mission</h5>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing cutting-edge technology services with focus on quality,
              creativity, and building lasting client relationships.
            </p>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>D-052/GF, SECTOR-32</p>
                  <p>PI ELDECO RESIDENCY</p>
                  <p>Noida, Uttar Pradesh 201301</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-pink-400" />
                <a href="mailto:info@suhtech.com" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  info@suhtech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-pink-400" />
                <a href="tel:+91" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  +91 XXX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SUH TECH PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
