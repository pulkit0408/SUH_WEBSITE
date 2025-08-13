import Card from "../components/TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="py-10 my-10 flex flex-col items-center gap-4">
      {/* Header Text */}
      <div className="flex flex-col max-w-[591px] py-4 px-4">
        <p
          className="text-center text-xl sm:text-2xl"
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
        <h1 className="text-white/95 text-center leading-tight sm:leading-[65px] text-3xl sm:text-5xl font-bold mt-2">
          What Our Clients Say About Us
        </h1>
        <p className="text-white/80 text-center leading-relaxed sm:leading-[31px] text-base sm:text-xl mt-3">
          Hear from businesses and creators across India who trusted us for
          game development and web app solutions.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-10 mt-10">
        <Card
          testimonial="“The game our team envisioned was brought to life beautifully by their developers. Smooth gameplay, stunning visuals, and timely delivery – couldn't have asked for more.”"
          image="avatar1.png"
          name="Rahul Sharma"
          role="Indie Game Developer"
          rating={5}
        />
        <Card
          testimonial="“We approached them for a custom web application for our e-learning platform. The UI/UX is modern, responsive, and exactly what we wanted. Their technical skills are top-notch.”"
          image="avatar2.png"
          name="Neha Kapoor"
          role="EdTech Founder"
          rating={5}
        />
        <Card
          testimonial="“From game mechanics to backend integration, their team handled everything perfectly. Their expertise in both gaming and web apps is rare and valuable.”"
          image="avatar3.png"
          name="Amit Verma"
          role="Startup Owner"
          rating={5}
        />
        <Card
          testimonial="“We needed a multiplayer game for our community, and they delivered a flawless experience. The project was on time and exceeded our expectations.”"
          image="avatar4.png"
          name="Sneha Iyer"
          role="Community Manager"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Testimonials;
