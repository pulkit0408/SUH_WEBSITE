import ServiceCard from "../components/Card";

const Services = () => {
  return (
    <div className="flex flex-col gap-12 py-16 px-4 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center p-4 gap-4">
        <p
          className="text-lg sm:text-xl font-medium text-center"
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
        <p className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-white/95 text-center leading-tight lg:leading-[60px]">
          The Services That Set <br className="hidden lg:block" /> You Apart
        </p>
        <p className="text-white/95 font-normal text-base sm:text-lg leading-relaxed max-w-3xl text-center">
          We create designs and solutions that make your brand unforgettable,
          combining creativity, strategy, and innovation to help you stand out
          online.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ServiceCard
          icon="/3d-rotate.svg"
          heading="Product Development"
          paragraph="At SUH TECH PRIVATE LIMITED, we turn bold ideas into powerful digital solutions. Our Product Development team works closely with clients to build innovative products that are not only technologically advanced but also deeply aligned with market needs."
        />
        <ServiceCard
          icon="/3d-rotate.svg"
          heading="Product Development"
          paragraph="At SUH TECH PRIVATE LIMITED, we turn bold ideas into powerful digital solutions. Our Product Development team works closely with clients to build innovative products that are not only technologically advanced but also deeply aligned with market needs."
        />
        <ServiceCard
          icon="/3d-rotate.svg"
          heading="Product Development"
          paragraph="At SUH TECH PRIVATE LIMITED, we turn bold ideas into powerful digital solutions. Our Product Development team works closely with clients to build innovative products that are not only technologically advanced but also deeply aligned with market needs."
        />
      </div>
    </div>
  );
};

export default Services;
