import React from 'react'

const SaleOffer = () => {
  return (
    <div>
      <div className="bg-yellow-500 text-white p-4 text-center">
      <p className="text-2xl font-semibold mb-2">20-50% Off Everything</p>
      <p className="text-sm mb-4">Limited time offer. Shop now and save big!</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Shop for Kids
        </button>
        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
          Shop for Women
        </button>
      </div>
    </div>
    </div>

    
  )
}

export default SaleOffer
