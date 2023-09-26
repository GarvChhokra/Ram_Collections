import React from 'react';

const Jeans = () => {
  return (
    <div className="p-4 mt-6">
      <h2 className="text-3xl text-center justify-center left-0 right-0 font-semibold mb-4 tracking-widest">Jeans Collection</h2>
      <div className="mb-10 mt-10 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add jeans items here */}
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center">
          {/* Jeans item 1 */}
          <img
            src="/jeans1.jpg" // Replace with your image source
            alt="Jeans 1"
            className="w-full h-auto"
          />
          <h3 className="text-lg font-semibold my-2">Women's Jeans</h3>
          <p className="text-sm mb-2">Stylish jeans for women.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center">
          {/* Jeans item 2 */}
          <img
            src="/jeans2.jpg" // Replace with your image source
            alt="Jeans 2"
            className="w-full h-auto"
          />
          <h3 className="text-lg font-semibold my-2">Kids' Jeans</h3>
          <p className="text-sm mb-2">Comfortable jeans for kids.</p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Jeans;
