import { useState } from "react";

const OwnerCard = ({ data }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-6 rounded-2xl max-w-sm mx-auto text-white">
    {/* Profile Image */}
    <div className="flex justify-center mb-4">
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>

    {/* Description/Quote */}
    <p className="text-gray-300 text-sm text-center mb-4 italic">
      "{data.description}"
    </p>

    {/* Name */}
    <h3 className="text-lg font-bold text-center">{data.name}</h3>

    {/* Role */}
    <p className="text-gray-400 text-sm text-center mt-1">
      {data.role}
    </p>
  </div>
  );
};

export default OwnerCard;
