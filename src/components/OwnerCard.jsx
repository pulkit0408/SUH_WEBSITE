import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OwnerCard = ({ data }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-3xl mx-auto bg-white/[0.03] border border-white/20 rounded-2xl shadow-lg p-10 text-center">
      {/* Founder Image */}
      <img
        src={data[index].image}
        alt={data[index].name}
        className="w-24 h-24 mx-auto rounded-full object-cover "
      />

      {/* Text */}
      <p className="mt-4 text-center text-white">“{data[index].description}”</p>
      <h3 className="mt-4 text-xl font-semibold text-white">
        {data[index].name}
      </h3>
      <p className="text-white/60">{data[index].role}</p>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-[52%] mx-2 -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 mx-2 -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default OwnerCard;
