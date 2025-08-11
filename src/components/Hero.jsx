import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-pink-900 relative overflow-hidden">
      {/* Background decorative elements */}
      

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We Are More{' '}
            <span className="bg-gradient-to-r from-[#DA308C] via-[#2254DF] to-[#DA308C] bg-clip-text leading-tight text-transparent">
              Than <br /> Just A Design Agency
            </span>
          </h1>
          

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We craft experiences that connect, inspire, and grow your business
            <br />
            —beyond just screens.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-[#4B72E1] via-[#8E51C5] to-[#D230A9] text-white rounded-2xl font-semibold w-56 h-14 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Portfolio
            </button>
            <button className="px-8 py-4 border-2 border-white/30 w-56 h-14 rounded-2xl text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Contact
            </button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;