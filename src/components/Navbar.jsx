import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-1 left-2 w-full z-50 px-6 py-6">
      <div className="max-w-9xl mx-auto flex justify-between">
        {/* Logo */}

        <div className="flex items-center justify-between ">
          <img
            className="rounded-full mx-5"
            src="src/assets/images/logo_Suh.jpg"
            alt="Logo"
            height={87}
            width={92}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex justify-between gap-6 mx-9">
            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
