import React, { useEffect, useState } from "react";

const About = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  const gradientColors = [
    "from-purple-400 to-blue-500",
    "from-pink-500 to-yellow-500",
    "from-green-400 to-teal-500",
    "from-indigo-500 to-purple-700",
    "from-red-400 to-orange-500",
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-10">
      <h1 className="text-white text-5xl font-extrabold text-center mb-10 drop-shadow-lg">
        🌟 Explore Our Colorful Products 🌟
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product.map((item, index) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl shadow-2xl bg-gradient-to-br ${
              gradientColors[index % gradientColors.length]
            } text-white hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
          >
            <div className="flex justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
            <p className="text-gray-200 text-sm">Product ID: {item.id}</p>

            <div className="mt-3 border-t border-white pt-3">
              <h3 className="text-lg font-semibold">Reviews:</h3>
              {item.reviews?.length > 0 ? (
                item.reviews.map((rev, i) => (
                  <div key={i} className="mt-2 p-3 bg-white bg-opacity-20 rounded-md">
                    <p className="italic">"{rev.comment}"</p>
                    <p className="text-right font-semibold">- {rev.reviewerName}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-200">No reviews yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
