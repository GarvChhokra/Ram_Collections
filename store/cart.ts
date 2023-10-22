import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the type for the cart store
type CartStore = {
  productsCart: any[]; // Adjust the type to match your product data structure
  addProduct: (product: any) => void;
  removeProduct: (product: any) => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      productsCart: [],
      addProduct: (product) => {
        set((state) => ({
          productsCart: [product, ...state.productsCart],
        }));
      },
      removeProduct: (product) => {
        console.log("Remove", product);
        set((state) => ({
          productsCart: state.productsCart.filter(
            (products) => products.product_id !== product.product_id
          ),
        }));
      },
    }),
    {
      name: "cart-store", // Key for local storage
    }
  )
);

export default useCartStore;
