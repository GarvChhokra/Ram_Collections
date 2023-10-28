"use client"
import ProductOverview from '@/components/ProductOverview/page';
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ProductDescription = ({ params }: { params: any }) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const decodedProductName = params.product
    ? decodeURIComponent(params.product)
    : "";

  return (
    <div>
      <h1 className="flex text-2xl tracking-wider font-semibold justify-center my-5">
        {decodedProductName}
      </h1>
      <ProductOverview productId={productId} />
    </div>
  );
};

export default ProductDescription
