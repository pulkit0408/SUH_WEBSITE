import { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/Card";

const Services = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320); // Default card width

  const services = [
    {
      icon: "/3d-rotate.svg",
      heading: "Web Development",
      paragraph:
        "Create stunning, responsive websites that drive results. Our expert developers build fast, secure, and user-friendly web applications using the latest technologies to help your business thrive online.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Mobile App Development",
      paragraph:
        "Transform your ideas into powerful mobile applications. We develop native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and drive engagement.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Digital Marketing",
      paragraph:
        "Boost your online presence and reach your target audience effectively. Our comprehensive digital marketing strategies include social media marketing, content marketing, and paid advertising campaigns.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "SEO Optimization",
      paragraph:
        "Improve your search engine rankings and drive organic traffic. Our SEO experts optimize your website content, structure, and performance to help you rank higher on Google and other search engines.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "UI/UX Design",
      paragraph:
        "Create intuitive and visually appealing user interfaces. Our design team crafts user experiences that are both beautiful and functional, ensuring your customers love using your digital products.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Cloud Solutions",
      paragraph:
        "Migrate to the cloud and scale your business efficiently. We provide cloud consulting, migration services, and ongoing management to help you leverage the power of cloud computing.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "E-commerce Development",
      paragraph:
        "Build powerful online stores that convert visitors into customers. Our e-commerce solutions include custom shopping carts, payment integration, and inventory management systems.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Data Analytics",
      paragraph:
        "Make data-driven decisions with our analytics solutions. We help you collect, analyze, and visualize your business data to uncover insights that drive growth and improve performance.",
    },
    {
      icon: "/3d-rotate.svg",
      heading: "Cybersecurity",
      paragraph:
        "Protect your business from digital threats. Our cybersecurity experts implement robust security measures, conduct vulnerability assessments, and provide ongoing monitoring to keep your data safe.",
    },
  ];

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(280); // Small screens
      } else if (width < 1024) {
        setCardWidth(300); // Medium screens
      } else {
        setCardWidth(320); // Large screens
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Handle scroll events to pause/resume animation
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsPaused(true);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Resume animation after scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 150); // Resume after 150ms of no scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const totalWidth = services.length * (cardWidth + 32); // card width + gap

  return (
    <>
      <div
        id="services"
        className="flex items-center justify-baseline flex-col gap-12 py-25 px-4 sm:px-8 lg:px-20 overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center p-4 gap-4">
          <p
            className="text-lg sm:text-xl lg:text-[22px] font-medium text-center"
            style={{
              background:
                "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            OUR SERVICES
          </p>
          <p className="leading-tight font-bold text-2xl sm:text-3xl lg:text-[48px] text-white/95 text-center">
            The Services That Set <br className="hidden sm:block" /> You Apart
          </p>
          <p className="text-white/95 font-normal leading-6 sm:leading-8 text-sm sm:text-base text-center max-w-4xl">
            We create designs and solutions that make your brand unforgettable,
            combining <br className="hidden lg:block" />
            creativity, strategy, and innovation to help you stand out online.
          </p>
        </div>

        {/* Scrolling Services Container */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className={`flex gap-8 ${
              isPaused ? "animate-scroll-paused" : "animate-scroll"
            }`}
            style={{
              width: `${totalWidth * 2}px`, // Double width for seamless loop
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of cards */}
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <ServiceCard
                  icon={service.icon}
                  heading={service.heading}
                  paragraph={service.paragraph}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <ServiceCard
                  icon={service.icon}
                  heading={service.heading}
                  paragraph={service.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-paused {
          animation: scroll 40s linear infinite;
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 35s; /* Slower on mobile for better readability */
          }
          .animate-scroll-paused {
            animation-duration: 35s;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
