import React from "react";

export default function Product({
  productId,
  name,
  image,
  description,
  price,
  addToCart,
}) {
  return (
    <div className="">
      <div className="flex flex-col border-2 border-blue-400 w-96 my-16 pb-10 rounded-md bg-white xsm:w-80">
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-96 rounded-md rounded-br-none rounded-bl-none xsm:h-80"
          ></img>
        </div>
        <div>
          <h4 className="text-center text-blue-600 text-2xl pt-2 roboto font-bold">
            {name}
          </h4>
        </div>
        <div className="text-center pt-2 ">
          <p className="roboto font-normal text-gray-600 text-xl">${price}</p>
        </div>
        <div className="text-center">
          <p className="roboto text-gray-600 font-normal text-xl ">
            {description}
          </p>
        </div>
        <div className="text-center pt-2">
          <button
            className="bg-purple-400 px-4 py-2 rounded-xl border-2 border-blue-400 cursor-pointer roboto font-bold text-white"
            onClick={() => addToCart(productId)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
