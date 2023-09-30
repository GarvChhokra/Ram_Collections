import React from 'react';

const Jeans = () => {
  return (
    <div className="p-4 mt-6">
      <h2 className="text-3xl text-center font-semibold mb-4 tracking-widest">Jeans Collection</h2>
      <div className="mb-10 mt-10 flex max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 ml-35 md:px-40 gap-10">
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
          <img
            src="/women_jeans_Home.jpg"
            alt="Women Jeans"
            className="w-60 h-40"
          />
          <h3 className="text-lg font-semibold my-2">Kids's Jeans</h3>
          <p className="text-sm mb-2">Stylish jeans for kids.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
          <img
            src="/mens_jeans_Home.jpeg"
            alt="Women Jeans"
            className="w-60 h-40"
          />
          <h3 className="text-lg font-semibold my-2">Women's Jeans</h3>
          <p className="text-sm mb-2">Stylish jeans for women.</p>
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
