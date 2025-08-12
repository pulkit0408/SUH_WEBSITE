const Card = ({ name, role, image, rating, testimonial }) => {
  return (
    <div className="flex flex-col items-center max-w-[360px] h-[550px] py-10 px-8 rounded-lg bg-white/[0.03] border border-white/20 backdrop-blur-md text-center shadow-lg">
      {/* Testimonial Text */}

      <p className="text-white text-base text-center max-w-[360px] leading-[34px] font-normal">
        {testimonial}
      </p>

      {/* Stars */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="mt-2 text-white font-medium">{name}</h3>
        <p className="text-white/60 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Card;
