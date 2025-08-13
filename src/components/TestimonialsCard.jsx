const Card = ({ name, role, rating, testimonial }) => {
  // Extract initials from the name
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col items-center max-w-[360px] sm:max-w-[400px] w-full py-6 sm:py-10 px-6 sm:px-8 rounded-lg bg-white/[0.03] border border-white/20 backdrop-blur-md text-center">
      {/* Testimonial Text */}
      <p className="text-white text-sm sm:text-base text-center leading-relaxed sm:leading-[34px] font-normal">
        {testimonial}
      </p>

      {/* Stars */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-lg sm:text-xl ${
              i < rating ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-6">
        {/* Avatar with initials */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
          {getInitials(name)}
        </div>
        <h3 className="mt-2 text-white font-medium text-sm sm:text-base">
          {name}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Card;
