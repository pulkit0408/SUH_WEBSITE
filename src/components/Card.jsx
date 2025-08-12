const ServiceCard = ({ icon: Icon, heading, paragraph }) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center p-8 space-y-4 rounded-[16px]"
        style={{
          background: "rgba(0, 0, 0, 0.24)",
          backdropFilter: "blur(28px)",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-2 w-20 h-20 p-5 rounded-full bg-[linear-gradient(90deg,#526EDE_0%,#8E51C5_50%,#CB34AD_100%)]">
          <img
            src={Icon}
            alt="icon"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-start justify-start">
          <p className="text-white/90 font-poppins text-2xl font-bold leading-normal">
            {heading}
          </p>
          <p className="text-white/70 font-poppins text-base font-normal leading-[27.2px]">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
