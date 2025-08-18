import { useState } from "react";

const OwnerCard = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-6 rounded-2xl max-w-sm mx-auto text-white flex-shrink-0">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        {!imageError ? (
          <img
            src={data.image}
            alt={data.name}
            className="w-20 h-20 rounded-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            {getInitials(data.name)}
          </div>
        )}
      </div>

      {/* Description/Quote */}
      <p className="text-gray-300 text-sm text-center mb-4 italic">
        "{data.description}"
      </p>

      {/* Name */}
      <h3 className="text-lg font-bold text-center">{data.name}</h3>

      {/* Role */}
      <p className="text-gray-400 text-sm text-center mt-1">{data.role}</p>
    </div>
  );
};

export default OwnerCard;
