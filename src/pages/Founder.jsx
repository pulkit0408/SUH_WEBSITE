import { useEffect, useState } from "react";
import OwnerCard from "../components/OwnerCard";

const Founder = () => {
  const [totalWidth, setTotalWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const foundersData = [
    {
      name: "M jha",
      role: "Founder",
      image: "m2.jpg",
      description:
        "As the founder of SUH TECH PRIVATE LIMITED, I am incredibly proud of the talented team we've built and the innovative solutions we create. Our mission has always been to empower businesses by providing exceptional technology services with a focus on quality, creativity, and timely delivery.",
    },
    {
      name: "M. Mayank",
      role: "Co-Founder",
      image: "mayank.jpg",
      description:
        "As co-founder of SUH TECH PRIVATE LIMITED, I am passionate about delivering innovative, high-quality solutions. Our team is dedicated to providing digital excellence across all services. We prioritize our clients' needs and ensure timely, tailored solutions that drive growth and success in today's ever-evolving digital world.",
    },
    {
      name: "Ankit Kumar",
      role: "CTO",
      image: "ankit_pic.jpg",
      description:
        "As the Chief Technology Officer at SUH TECH PRIVATE LIMITED, I am dedicated to driving innovation and building cutting-edge technological solutions that empower our clients. My focus is on aligning technology strategy with business goals, ensuring robust system architecture, scalability, and security. With a passion for emerging tech trends, I lead our development teams to deliver solutions that are not only functional but also future-ready.",
    },
    {
      name: "Pulkit Pandey",
      role: "Head of IT",
      image: "pulkit_pic.jpg",
      description:
        "As the Head of IT at SUH TECH PRIVATE LIMITED, I oversee the infrastructure, systems, and networks that power our operations. My role is to ensure seamless technology integration, optimized performance, and uncompromising security. I am committed to leveraging the latest advancements to keep our IT ecosystem agile, reliable, and scalable, enabling our teams to focus on delivering exceptional solutions to clients.",
    },
    {
      name: "Sahil Chaurasia",
      role: "Game Developer",
      image: "sahil.jpg",
      description:
        "As a Game Developer at SUH TECH PRIVATE LIMITED, I combine creativity with technical expertise to craft engaging, immersive, and visually stunning gaming experiences. I work across multiple platforms and technologies to bring ideas to life, from concept design to final deployment. My goal is to create games that not only entertain but also inspire and connect with players worldwide.",
    },
    {
      name: "Beauty Mondal",
      role: "Admin",
      image: "Beauty.jpg",
      description:
        "As the Admin at SUH TECH PRIVATE LIMITED, I ensure smooth day-to-day operations by managing office activities, coordinating tasks, and supporting both management and staff. My role is to maintain organization, handle essential administrative duties, and create an efficient work environment. I am dedicated to keeping processes streamlined and contributing to the overall productivity of the company.",
    },
    {
      name: "Soumya Sindhu",
      role: "Marketing Manager",
      image: "Soumya.jpg",
      description:
        "As the Business Development Manager at SUH TECH PRIVATE LIMITED, I am focused on driving growth by developing strategies, building lasting client relationships, and exploring new market opportunities. My role is to lead business initiatives, identify potential partnerships, and ensure our solutions align with client needs. I am passionate about fostering sustainable growth, strengthening our market presence, and contributing to the company’s vision of innovation and excellence.",
    },
    {
      name: "Vaideeka Sharma",
      role: "Sales",
      image: "Soumya.jpg",
      description:
        "As the Sales Manager at SUH TECH PRIVATE LIMITED, I am responsible for leading our sales strategies, driving revenue growth, and building strong client relationships. My role is to identify market opportunities, guide the sales team, and ensure we deliver solutions that meet client needs. I am passionate about achieving targets, fostering a high-performance culture, and contributing to the company’s long-term success and vision of excellence.",
    },
    {
      name: "Aman Kumar",
      role: "Digital Marketing",
      image: "Soumya.jpg",
      description:
        "As a Marketing Executive at SUH TECH PRIVATE LIMITED, I support the development and execution of marketing campaigns that promote our services and brand. My role involves assisting in content creation, social media management, and market research to reach the right audience. I am eager to learn, contribute fresh ideas, and help strengthen the company’s marketing efforts and growth.",
    },
    // {
    //   name: "Ansh Kundra",
    //   role: "Marketing Manager",
    //   image: "Soumya.jpg",
    //   description:
    //     "As the Marketing Manager at SUH TECH PRIVATE LIMITED, I lead the planning and execution of strategies that build our brand and expand market reach. My role involves overseeing campaigns, guiding the marketing team, and leveraging data-driven insights to achieve impactful results. I am passionate about driving brand growth, strengthening engagement, and contributing to the company’s long-term success.",
    // },
  ];

  // Duplicate the data for seamless scrolling
  const duplicatedData = [...foundersData, ...foundersData];

  useEffect(() => {
    // Calculate total width based on card width and gap
    const cardWidth = 384; // max-w-sm = 384px
    const gap = 32; // gap-8 = 32px
    setTotalWidth(
      foundersData.length * cardWidth + (foundersData.length - 1) * gap
    );
  }, [foundersData.length]);

  return (
    <div className="py-8 px-15">
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

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-paused {
          animation: scroll 40s linear infinite;
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 35s; /* Slower on mobile for better readability */
          }
          .animate-scroll-paused {
            animation-duration: 35s;
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
          Team
        </span>
      </h1>

      {/* Unified Scrolling Animation for Both Mobile and Desktop */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-8 px-4 ${
            isPaused ? "animate-scroll-paused" : "animate-scroll"
          }`}
          style={{ width: `${totalWidth * 2}px` }}
        >
          {duplicatedData.map((founder, index) => (
            <OwnerCard key={index} data={founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founder;
