const ServiceCard = ({ icon, heading, paragraph }) => {
  return (
    <div
      className="flex flex-col items-start justify-center p-6 sm:p-8 space-y-4 rounded-[16px] w-full"
      style={{
        background: "rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(28px)",
      }}
    >
      {/* Icon Container */}
      <div className="flex flex-col justify-center items-center gap-2 w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-5 rounded-full bg-[linear-gradient(90deg,#526EDE_0%,#8E51C5_50%,#CB34AD_100%)]">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start justify-start">
        <p className="text-white/90 font-poppins text-lg sm:text-2xl font-bold leading-snug">
          {heading}
        </p>
        <p className="text-white/70 font-poppins text-sm sm:text-base font-normal leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
