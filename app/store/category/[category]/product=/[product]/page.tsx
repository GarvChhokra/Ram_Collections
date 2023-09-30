"use client"
import ProductOverview from '@/components/ProductOverview/page';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductDescription = ({params}: {params: any}) => {
  const router = useRouter();
  console.log(params);
  const decodedProductName = params.product ? decodeURIComponent(params.product) : '';

  return (
    <div>
      <h1 className='flex text-2xl tracking-wider font-semibold justify-center my-5'>{decodedProductName}</h1>
      <ProductOverview/>
    </div>
  )
}

export default ProductDescription
