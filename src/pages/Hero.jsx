import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative">
      <div className="overflow-hidden mt-20">
        <img
          src="Vector 642.svg"
          alt="background"
          className="absolute top-5 left-0 w-auto h-auto max-w-[50%] sm:max-w-none"
        />

        <img
          src="Frame.png"
          alt="rectangle"
          className="hidden sm:block absolute bottom-30 left-0 w-auto h-auto max-w-[50%] sm:max-w-none"
        />

        <div
          className={`relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Main Title */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                We Are More{" "}
                <span
                  className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block animate-pulse"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 4s ease-in-out infinite",
                  }}
                >
                  Than <br /> Just A Design Agency
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              We craft experiences that connect, inspire, and grow your business
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              —beyond just screens.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-2">
              {/* Portfolio Button */}
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl font-semibold w-full sm:w-56 h-12 sm:h-14 transition-all duration-300 shadow-xl relative overflow-hidden group hover:scale-105 hover:-translate-y-1 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></div>
                <span className="relative z-10">Portfolio</span>
              </button>

              {/* Contact Button */}
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 w-full sm:w-56 h-12 sm:h-14 rounded-2xl text-white font-semibold backdrop-blur-sm transition-all duration-300 relative overflow-hidden group hover:scale-105 hover:-translate-y-1 active:scale-95 hover:border-white/50 hover:bg-white/10"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}

              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(218, 48, 140, 0.3), rgba(34, 84, 223, 0.3), rgba(218, 48, 140, 0.3))",
                  }}
                />
                <span className="relative z-10">Contact</span>
              </button>
            </div>

            {/* Images Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
              {/* Left Image - Team/Our Team - Taller */}
              <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-72 h-56 xs:w-80 xs:h-64 sm:w-72 sm:h-64 lg:w-72 lg:h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <img
                    src="ludo_game.jpg"
                    alt="Game Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Working on Game
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Leveling up, one game at a time
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Image - Working on Websites - Shorter */}
              <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-72 h-44 xs:w-80 xs:h-48 sm:w-72 sm:h-48 lg:w-72 lg:h-48 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <img
                    src="hero2.svg"
                    alt="Working on Websites"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Working On Websites
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Crafting digital experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image - Working on Apps - Taller */}
              <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-72 h-56 xs:w-80 xs:h-64 sm:w-72 sm:h-64 lg:w-72 lg:h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <img
                    src="hero1.png"
                    alt="Working on Apps"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Working on Apps
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Mobile innovation at its best
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="Vector 643.svg"
          alt="background"
          className="absolute top-5 right-0 w-auto h-auto max-w-[50%] sm:max-w-none"
        />

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
      </div>
    </section>
  );
};

export default HeroSection;
