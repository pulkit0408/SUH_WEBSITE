const BlogCard = ({ image, tags = [], title, description, slug }) => {
  const handleReadMore = () => {

    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-4 sm:p-6 rounded-2xl max-w-sm sm:max-w-md text-white mx-auto">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs sm:text-sm rounded-full ${
              index === 0 ? "bg-pink-500 text-white" : "bg-blue-600 text-white"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold mt-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-xs sm:text-sm mt-1">{description}</p>

      {/* Link */}
      <button
        onClick={handleReadMore}
        className="text-pink-400 font-medium mt-3 inline-block hover:underline text-sm sm:text-base transition-colors hover:text-pink-300"
      >
        Read Now →
      </button>
    </div>
  );
};

export default BlogCard;
