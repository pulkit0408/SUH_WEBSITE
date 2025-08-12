import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div className="py-10 my-10 flex flex-col items-center gap-4">
      <div className="flex flex-col max-w-[591px] py-4">
        <p
          className="text-center font-medium text-2xl"
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
        <h1 className="text-white/95 text-center leading-[65px] text-5xl font-bold">
          Designing Better, one insight at a time
        </h1>
        <p className="text-white/80 text-center leading-[31px] text-xl">
          Explore stories, lessons and strategies from my journey in product
          design.
        </p>
      </div>
      <div className="flex gap-6 items-start mx-10 mt-10">
        <BlogCard
          image="Blog1.png"
          tags={["UI/UX Design", "Product Design"]}
          title="The Power of insights"
          description="Discover how data driven design decisions can elevate your products..."
        />
        <BlogCard
          image="Blog2.png"
          tags={["UI/UX Design"]}
          title="About Teamwork"
          description="Discover how data driven design decisions can elevate your products..."
        />
        <BlogCard
          image="Blog3.png"
          tags={["UI/UX Design", "Product Design"]}
          title="Mobile App Designing"
          description="Discover how data driven design decisions can elevate your products..."
        />
      </div>
    </div>
  );
};

export default Blog;
