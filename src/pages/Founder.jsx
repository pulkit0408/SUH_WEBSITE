import OwnerCard from "../components/OwnerCard";

const Founder = () => {
  const foundersData = [
    {
      name: "M. Mayank",
      role: "Co-Founder",
      image: "mayank.jpg",
      description:
        "As co-founder of SUH TECH PRIVATE LIMITED, I am passionate about delivering innovative, high-quality solutions. Our team is dedicated to providing digital excellence across all services. We prioritize our clients' needs and ensure timely, tailored solutions that drive growth and success in today's ever-evolving digital world.",
    },
    {
      name: "M jha",
      role: "Founder",
      image: "m2.jpg",
      description:
        "As the founder of SUH TECH PRIVATE LIMITED, I am incredibly proud of the talented team we've built and the innovative solutions we create. Our mission has always been to empower businesses by providing exceptional technology services with a focus on quality, creativity, and timely delivery.",
    },
  ];

  return (
    <div className="py-10">
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

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
        Meet Our{" "}
        <span
          className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block animate-pulse"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease-in-out infinite",
          }}
        >
          Leaders
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {foundersData.map((founder, index) => (
          <OwnerCard key={index} data={founder} />
        ))}
      </div>
    </div>
  );
};

export default Founder;
