import useCartStore from "@/store/cart";
import React from "react";

const Subtotal = () => {
  const { productsCart } = useCartStore();
  console.log(productsCart);
  const totalPrice = productsCart
    .reduce((total, item) => {
      const itemPrice = item.product.price * item.quantity;
      return total + itemPrice;
    }, 0)
    .toFixed(2);
  console.log(totalPrice);
  const discountTotal = productsCart
    .reduce((total, item) => {
      const discountPrice =
        item.product.price * item.product.discount * item.quantity;
      return total + discountPrice;
    }, 0)
    .toFixed(2);

  console.log("Discount", discountTotal);

  return (
    <div>
      <h1>Total</h1>
      <hr></hr>
      <div className="container w-3/4 mx-auto my-10">
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Total Price
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            You Save
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
            Effective Price
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"></h3>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            {" "}
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="text-2xl">{totalPrice}</span>
            </div>
          </div>

          <span className="text-center w-1/5 font-semibold text-sm">
            <p className="text-2xl text-red-500 underline tracking-tight text-gray-900">
              {discountTotal}
            </p>
          </span>
          <span className="text-center w-1/5 font-bold">
            <p className="text-3xl tracking-tight bg-red-500 text-yellow-300 rounded-full text-gray-900">
              {(totalPrice - discountTotal).toFixed(2)}
            </p>
          </span>
          <span className="text-center w-1/5 font-semibold text-xl">
            <button className="bg-blue-500 p-2 text-white rounded-full p-2">
              Checkout
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
