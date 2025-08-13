const OwnerCard = ({ data }) => {


  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-6 rounded-2xl max-w-sm mx-auto text-white flex-shrink-0">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-20 h-20 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/80x80/6366f1/ffffff?text=" + data.name.charAt(0);
          }}
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
