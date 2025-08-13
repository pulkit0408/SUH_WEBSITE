import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      image: "Blog1.png",
      tags: ["UI/UX Design", "Product Design"],
      title: "The Power of insights",
      description: "Discover how data driven design decisions can elevate your products...",
      slug: "power-of-insights"
    },
    {
      image: "Blog2.png",
      tags: ["UI/UX Design"],
      title: "About Teamwork",
      description: "Discover how data driven design decisions can elevate your products...",
      slug: "about-teamwork"
    },
    {
      image: "Blog3.png",
      tags: ["UI/UX Design", "Product Design"],
      title: "Mobile App Designing",
      description: "Discover how data driven design decisions can elevate your products...",
      slug: "mobile-app-designing"
    }
  ];

  return (
    <div className="py-10 my-10 flex flex-col items-center gap-4">
      <div className="flex flex-col max-w-[591px] py-4 px-4 animate-fade-in-up">
        <p
          className="text-center font-medium text-xl sm:text-2xl"
          style={{
            background:
              "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR BLOG
        </p>
        <h1 className="text-white/95 text-center leading-tight sm:leading-[65px] text-3xl sm:text-5xl font-bold mt-2">
          Designing Better, one insight at a time
        </h1>
        <p className="text-white/80 text-center leading-relaxed sm:leading-[31px] text-base sm:text-xl mt-3">
          Explore stories, lessons and strategies from my journey in product
          design.
        </p>
      </div>

      {/* Blog Cards - 3 in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-4 sm:mx-10 mt-10 max-w-7xl animate-fade-in-up-delayed">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'animate-slide-in-left md:animate-float-1' :
              index === 1 ? 'animate-slide-in-up md:animate-float-2' :
              'animate-slide-in-right md:animate-float-3'
            }`}
          >
            <BlogCard
              image={post.image}
              tags={post.tags}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-12px) rotate(-1deg);
          }
          66% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          20% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          40% {
            transform: translateY(-15px) rotate(-0.5deg);
          }
          60% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .animate-slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out 0.5s forwards;
        }

        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out 0.7s forwards;
        }

        .animate-slide-in-up {
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.6s forwards;
        }

        @media (min-width: 768px) {
          .animate-float-1 {
            animation: slideInLeft 0.8s ease-out 0.5s forwards,
                       float1 4s ease-in-out 1.3s infinite;
          }

          .animate-float-2 {
            animation: slideInUp 0.8s ease-out 0.6s forwards,
                       float2 3.5s ease-in-out 1.4s infinite;
          }

          .animate-float-3 {
            animation: slideInRight 0.8s ease-out 0.7s forwards,
                       float3 4.5s ease-in-out 1.5s infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
