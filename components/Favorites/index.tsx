import Link from 'next/link'
import React from 'react'
import {IoIosArrowBack} from "react-icons/io"

const Favorites = () => {
  return (
    <div className="container w-3/4 mx-auto my-10">
      <div className="px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Favourites</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Product Details
          </h3>
          
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Price
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Add to Cart/Remove
          </h3>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            {" "}
            {/* product */}
            <div className="w-20">
              <img
                className="h-24"
                src="mens_jeans_Home.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Jeans</span>
              <span className="text-red-500 text-xs">Women</span>
            </div>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            $400.00
          </span>
          <div className="text-center w-1/5 font-semibold text-sm">
            <div className='flex items-center justify-between'>
            <button className='bg-indigo-600 text-white rounded-md p-2'>Add to Cart</button>
            <button className='bg-red-500 text-white rounded-md p-2'>Remove</button>
            </div>
          </div>
        </div>
        
        <Link
          href="/"
          className="flex font-semibold text-indigo-600 text-sm mt-10"
        >
          <span className='mt-1'>
          <IoIosArrowBack/>
          </span>
          Continue Shopping
        </Link>
      </div>
      </div>
  )
}

export default Favorites
