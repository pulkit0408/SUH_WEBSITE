const BlogCard = ({ image, tags = [], title, description, link }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.24)] p-4 rounded-2xl max-w-[410px] text-white">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>

      {/* Tags */}
      <div className="flex gap-2.5 mt-4 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-1.5 py-2.5 text-sm rounded-full ${
              index === 0
                ? "bg-[#BE3AB2CC] text-white"
                : "bg-[#4751E8CC] text-white"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 font-normal text-sm leading-[21px] mt-1">
        {description}
      </p>

      {/* Link */}
      <a
        href={link}
        className="font-medium text-sm cursor-pointer mt-3 inline-block hover:underline"
        style={{
          background:
            "linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Read Now →
      </a>
    </div>
  );
};

export default BlogCard;
