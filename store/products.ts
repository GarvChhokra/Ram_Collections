import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the type for your store
interface Product {
  data: {
    product_id: number;
    title: string;
    description: string;
    category_name: string;
    subcategory: string;
    price: string;
    size: string;
    quantity: number;
    discount: string;
    is_featured: number | null;
    image: string;
  };
}

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

// Use the type when creating the store with zustand-persist middleware
export const useProductStore = create(
  persist<ProductStore>(
    (set) => ({
      products: [],

      fetchProducts: async () => {
        try {
          const response = await fetch(`/api/products`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const products: Product[] = await response.json();

          set({ products });
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
    }),
    {
      name: "productStore", // Name for the persisted store
    }
  )
);
