import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white border-t-2 border-white/10">
      {/* Tagline Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">One </span>
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Platform
            </span>
            <span className="text-white"> Global </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <button
            className="px-8 py-4 text-white rounded-2xl font-semibold transition-all duration-300  relative overflow-hidden group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
            }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="relative z-10">Get Demo</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="logo_Suh.jpg"
                  className="rounded-full"
                  height={48}
                  width={48}
                  alt="SUH TECH Logo"
                />
                <h3 className="text-2xl font-bold text-white">SUH TECH</h3>
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <a
                  href="mailto:info@suhtech.top"
                  className="hover:text-pink-400 transition-colors"
                >
                  info@suhtech.top
                </a>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering innovative, high-quality digital solutions with
                excellence, creativity, and timely delivery since 2024.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Mobile Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    id="/contact"
                    href="#contact"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Our Story
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Profiles */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Social Profiles
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/suhtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all hover:text-white group"
                >
                  <Facebook
                    size={18}
                    className="text-gray-300 group-hover:text-white"
                  />
                </a>
                <a
                  href="https://www.instagram.com/suhtechpvtltd/profilecard/?igsh=OXpvMHJqZ3k0em51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all hover:text-white group"
                >
                  <Instagram
                    size={18}
                    className="text-gray-300 group-hover:text-white"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/suh-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:text-white group"
                >
                  <Linkedin
                    size={18}
                    className="text-gray-300 group-hover:text-white"
                  />
                </a>
                <a
                  href="https://x.com/suhtechpvt?t=ts0tMtGlnbzZT4MEBSohsQ&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-black rounded-lg flex items-center justify-center transition-all hover:text-white group"
                >
                  <Twitter
                    size={18}
                    className="text-gray-300 group-hover:text-white"
                  />
                </a>
              </div>

              {/* Address */}
              <div className="text-gray-300 text-sm space-y-1 mt-6">
                <p className="font-medium">Address:</p>
                <p>Habitech crystal mall,</p>
                <p>knowledge park III,</p>
                <p>4th floor,D-8,Greater Noida,</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SUH TECH PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
