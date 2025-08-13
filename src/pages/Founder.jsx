import React from "react";
import OwnerCard from "../components/OwnerCard";

const Founder = () => {
  const foundersData = [
    {
      name: "M. Mayank",
      role: "Co-Founder",
      image: "mayank.jpg",
      description:
        "“As co-founder of SUH TECH PRIVATE LIMITED, I am passionate about delivering innovative, high-quality solutions. Our team is dedicated to providing digital excellence across all services. We prioritize our clients’ needs and ensure timely, tailored solutions that drive growth and success in today’s ever-evolving digital world.”",
    },
    {
      name: "M jha",
      role: "Founder",
      image: "m2.jpg",
      description:
        "“As the founder of SUH TECH PRIVATE LIMITED, I am incredibly proud of the talented team we’ve built and the innovative solutions we create. Our mission has always been to empower businesses by providing exceptional technology services with a focus on quality, creativity, and timely delivery.From the start, we have focused on building lasting relationships with our clients, working side-by-side with them to turn their ideas into impactful digital experiences. I firmly believe in the power of collaboration and always strive to ensure that we value your time in every project we undertake.We are committed to staying ahead of industry trends and delivering solutions that not only meet but exceed our clients’ expectations. I look forward to continuing this exciting journey and making a positive impact on every business we partner with.”",
    },
  ];

  return (
    <div className="py-10">
      <h2
        className="text-center text-3xl font-bold mb-6"
        style={{
          background:
            "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Meet Our Leaders
      </h2>
      <OwnerCard data={foundersData} />
    </div>
  );
};

export default Founder;
