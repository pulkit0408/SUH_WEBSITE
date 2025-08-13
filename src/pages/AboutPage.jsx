import { ArrowRight, Award, Eye, Heart, Lightbulb, Target, Users } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: "/3d-rotate.svg",
      heading: "Web Development",
      paragraph: "Create stunning, responsive websites that drive results. Our expert developers build fast, secure, and user-friendly web applications using the latest technologies to help your business thrive online.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Mobile App Development",
      paragraph: "Transform your ideas into powerful mobile applications. We develop native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and drive engagement.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Digital Marketing",
      paragraph: "Boost your online presence and reach your target audience effectively. Our comprehensive digital marketing strategies include social media marketing, content marketing, and paid advertising campaigns.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "SEO Optimization",
      paragraph: "Improve your search engine rankings and drive organic traffic. Our SEO experts optimize your website content, structure, and performance to help you rank higher on Google and other search engines.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "UI/UX Design",
      paragraph: "Create intuitive and visually appealing user interfaces. Our design team crafts user experiences that are both beautiful and functional, ensuring your customers love using your digital products.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Cloud Solutions",
      paragraph: "Migrate to the cloud and scale your business efficiently. We provide cloud consulting, migration services, and ongoing management to help you leverage the power of cloud computing.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "E-commerce Development",
      paragraph: "Build powerful online stores that convert visitors into customers. Our e-commerce solutions include custom shopping carts, payment integration, and inventory management systems.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Data Analytics",
      paragraph: "Make data-driven decisions with our analytics solutions. We help you collect, analyze, and visualize your business data to uncover insights that drive growth and improve performance.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Cybersecurity",
      paragraph: "Protect your business from digital threats. Our cybersecurity experts implement robust security measures, conduct vulnerability assessments, and ongoing monitoring to keep your data safe.",
    },
  ];

  const handleGetStarted = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-green-500',
    'from-yellow-500 to-orange-500',
    'from-violet-500 to-purple-500'
  ];

  return (
    <div className="text-white">
      {/* Hero Section - Removed mt-10 and added pt-10 instead */}
      <div className="relative overflow-hidden pt-10">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-center"
              style={{
                background: "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About SUH TECH
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-center">
              Transforming visions into digital realities with cutting-edge technology solutions
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the gap between innovative technology and business success,
              SUH TECH PRIVATE LIMITED has emerged as a trusted partner for companies looking to
              transform their digital presence.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Our journey began with a simple belief: every business deserves access to world-class
              technology solutions that drive growth, enhance efficiency, and create lasting impact.
              Today, we continue to push boundaries and set new standards in the tech industry.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 backdrop-blur-sm border border-gray-700 text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 backdrop-blur-sm border border-gray-700 text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 backdrop-blur-sm border border-gray-700 text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our Team"
              className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Vision, Mission, Values Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700 hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To be the leading technology partner that empowers businesses to achieve unprecedented
              digital transformation and sustainable growth through innovative solutions and exceptional service.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700 hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To deliver cutting-edge technology solutions that solve real-world business challenges,
              foster innovation, and create meaningful value for our clients and their customers.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-pink-900/50 to-red-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700 hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Values</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Innovation, integrity, and excellence guide everything we do. We believe in transparency,
              collaboration, and delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">What Sets Us Apart</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just build software; we craft experiences that drive business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Innovation First</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage.
            </p>
          </div>

          <div className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Client-Centric</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Your success is our priority. We work closely with you to understand your unique needs and deliver tailored solutions.
            </p>
          </div>

          <div className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
            <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Quality Assurance</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We maintain the highest standards of quality in every project, ensuring robust, scalable, and secure solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Overview - Scrolling Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className=" rounded-2xl p-8 sm:p-12 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Complete Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Comprehensive technology solutions for every business need
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-scroll">
              {[...services, ...services].map((service, index) => {
                const originalIndex = index % services.length;
                return (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-xl p-6 border border-gray-600/50 hover:border-gray-500 transition-all duration-300 group flex-shrink-0 w-80 sm:w-96"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradients[originalIndex]} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <img src={service.icon} alt={service.heading} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{service.heading}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.paragraph}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(services.length * (320 + 24))}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 35s;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${(services.length * (256 + 24))}px);
            }
          }
        }
      `}</style>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your technology goals and drive sustainable growth.
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
            }}
          >
            Get Started Today
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
