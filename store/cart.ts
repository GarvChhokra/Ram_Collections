import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the type for the cart store
type CartStore = {
  productsCart: { product: any; quantity: number }[]; // Adjust the type to match your product data structure
  addProduct: (product: any) => void;
  removeProduct: (product: any) => void;
  increaseQuantity: (product: any) => void;
  decreaseQuantity: (product: any) => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      productsCart: [],
      addProduct: (product) => {
        set((state) => ({
          productsCart: [{ product, quantity: 1 }, ...state.productsCart],
        }));
      },
      removeProduct: (product) => {
        set((state) => ({
          productsCart: state.productsCart.filter(
            (products) => products.product.product_id !== product.product.product_id
          ),
        }));
      },
      increaseQuantity: (product) => {
        console.log("p:",product);
        set((state) => ({
          productsCart: state.productsCart.map((item) =>
            item.product.product_id === product.product.product_id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },
      decreaseQuantity: (product) => {
        set((state) => ({
          productsCart: state.productsCart.map((item) =>
            item.product.product_id === product.product.product_id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
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
