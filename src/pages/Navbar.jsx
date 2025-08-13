import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (itemName, href) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-black/30 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
              <img
                src="/logo_Suh.jpg"
                className="rounded-full"
                height={60}
                width={60}
                alt="SUH TECH"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.href)}
                  className={`transition-colors duration-300 font-medium relative group ${
                    activeItem === item.name
                      ? "text-pink-400"
                      : "text-white hover:text-pink-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ${
                      activeItem === item.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-pink-400 transition-colors duration-300 z-[60]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[55] transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{
          background:
            "linear-gradient(90deg, rgba(32, 49, 120, 0.90) 0%, rgba(74, 29, 115, 0.90) 50%, rgba(104, 24, 88, 0.90) 100%)",
        }}
      >
        {/* Close Button in Overlay */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors duration-300"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.href)}
              className={`transition-all duration-500 font-medium text-2xl transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              } ${
                activeItem === item.name
                  ? "text-pink-400"
                  : "text-white hover:text-pink-400"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
