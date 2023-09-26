import React from "react";
import { WomenClothing } from "./WomenClothingsProducts";
import ProductsMappingWomen from "./ProductsMappingWomen";
import Link from "next/link";

interface WomenClothingsProps {
    products: WomenClothing[];
}

const WomenClothings: React.FC<WomenClothingsProps> = ({products}) => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore more about Womens Fashion Styles</h2>
            <Link href="#">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">
              Explore More
            </button>
            </Link>
          </div>
          <div className="">
           <ProductsMappingWomen products={products}/>
           </div>
        </div>
      </div>
  )
}

export default WomenClothings;