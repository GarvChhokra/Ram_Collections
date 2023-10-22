import { useProductStore } from "@/store/products";
import Link from "next/link";
import { useEffect } from "react";

export default async function ProductsCard() {
  const currentURL = window.location.href;
  console.log(currentURL);
  const category = currentURL.substring(
    currentURL.lastIndexOf("/") + 1,
    currentURL.length
  );

  const { products, fetchProducts } = useProductStore();
  if (products.length == 0) {
    await fetchProducts();
  }
  console.log("Products", products);

  return (
    <div className="bg-white">
      <div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.data
            .filter(
              (product: { category_name: string }) =>
                product.category_name === category
            )
            .map((product: any) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        href={{
                          pathname: `/store/category/Women/product=/${product.title}`,
                          query: { productId: product.product_id },
                        }}
                        passHref
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
