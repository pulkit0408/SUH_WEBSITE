import ServiceCard from "../components/Card";


const Services = () => {
  return (
    <>
      <div className="flex items-center justify-baseline flex-col gap-12 py-25 px-20">
        <div className="flex flex-col items-center justify-center text-center p-4 gap-4">
          <p
            className="text-[22px] font-medium text-center lg:text-left"
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
          <p className="leading-15 font-bold text-[48px] text-white/95 text-center">
            The Services That Set <br /> You Apart
          </p>
          <p className="text-white/95 font-normal leading-8 text-md text-center">
            We create designs and solutions that make your brand unforgettable, combining <br />
            creativity, strategy, and innovation to help you stand out online.
          </p>
        </div>

        <div className="flex items-start justify-center gap-8">
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
    </>
  );
};

export default Services;
