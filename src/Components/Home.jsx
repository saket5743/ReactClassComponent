import React, { useEffect, useState } from "react";

const Home = () => {
  const [value, setValue] = useState([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
      });
  }, []);

  const gradientColors = [
    "from-purple-500 to-indigo-500",
    "from-pink-500 to-yellow-500",
    "from-green-400 to-teal-500",
    "from-indigo-500 to-purple-700",
    "from-red-400 to-orange-500",
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen p-10">
      <h1 className="text-white text-5xl font-extrabold text-center mb-10 drop-shadow-lg">
       Featured Products 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {value.map((item, index) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl shadow-2xl bg-gradient-to-br ${
              gradientColors[index % gradientColors.length]
            } text-white hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
          >
            <div className="relative flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain rounded-lg shadow-lg bg-white p-3"
              />
            </div>

            <h2 className="text-lg font-bold mt-4">{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h2>
            <p className="text-yellow-300 text-md font-semibold mt-2">${item.price}</p>
            <p className="text-gray-300 text-sm mt-1">Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
