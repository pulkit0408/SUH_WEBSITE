import Card from "../components/TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="py-10 my-10 flex flex-col items-center gap-4">
      {/* Text */}
      <div className="flex flex-col max-w-[591px] py-4">
        <p
          className="text-center text-2xl"
          style={{
            background:
              "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR TESTIMONIALS
        </p>
        <h1 className="text-white/95 text-center leading-[65px] text-5xl font-bold">
          What Our Client Say About Us
        </h1>
        <p className="text-white/80 text-center leading-[31px] text-xl">
          Explore stories, lessons and strategies from my journey in product
          design.
        </p>
      </div>

      {/* Card Component */}
      <div className="flex gap-8 items-center mx-10 mt-10">
        <Card
          testimonial="“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”"
          image="avatar1.png"
          name="Jane Smith"
          role="Freelance Designer"
          rating={5}
        />
        <Card
          testimonial="“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”"
          image="avatar2.png"
          name="Tom Williams"
          role="Software Developer"
          rating={3}
        />
        <Card
          testimonial="“I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.”"
          image="avatar3.png"
          name="Michael Brown"
          role="Online Entrepreneur"
          rating={4}
        />
        <Card
          testimonial="“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”"
          image="avatar4.png"
          name="Sarah Johnson"
          role="Blogger"
          rating={3}
        />
      </div>
    </div>
  );
};

export default Testimonials;
