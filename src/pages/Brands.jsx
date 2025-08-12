const Brands = () => {
  const brands = [
    "Brand1.svg",
    "Brand2.svg",
    "Brand3.svg",
    "Brand4.svg",
    "Brand5.svg",
  ];

  return (
    <div className="overflow-hidden relative py-8 my-10">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "scroll 20s linear infinite",
        }}
      >
        {/* First set */}
        {brands.map((src, index) => (
          <img
            key={`first-${index}`}
            src={src}
            alt={`Brand ${index + 1}`}
            className="mx-10"
          />
        ))}

        {/* Second set for seamless loop */}
        {brands.map((src, index) => (
          <img
            key={`second-${index}`}
            src={src}
            alt={`Brand ${index + 1}`}
            className="mx-10"
          />
        ))}
      </div>

      {/* Keyframes defined inline */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
