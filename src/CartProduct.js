import React from "react";

export default function CartProduct({
  cartId,
  title,
  img,
  money,
  removeFromCart,
  addToCart,
}) {
  return (
    <div>
      <div className="flex flex-col border-2 border-blue-400 w-64 my-16 pb-10 rounded-md bg-white ml-4 ">
        <img
          src={img}
          alt={title}
          className="w-full h-64 rounded-md rounded-br-none rounded-bl-none"
        ></img>
        <h4 className="text-center text-blue-600 text-2xl pt-2">{title}</h4>
        <p className="text-center pt-2">${money}</p>
        <div className="flex justify-around items-center">
          <div>
            <button
              type="button"
              className="p-2 text-xl bg-red-600 text-white rounded-xl mt-2"
              onClick={() => removeFromCart(cartId)}
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
