import React from "react";
import CartProduct from "./CartProduct";

export default function Cart({ cartItems, removeItem, handleCart }) {
  const totalItemsPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div className="pl-4 sm:text-center">
        <h1 className="text-4xl roboto font-black text-gray-600">
          Your shopping bag
        </h1>
      </div>
      {cartItems.length === 0 && (
        <div>
          <p className="text-red-600 text-center pt-10 roboto font-bold text-6xl">
            No items in the bag
          </p>
        </div>
      )}
      <div className="flex flex-row md:grid md:grid-cols-2 sm:flex sm:flex-col sm:items-center xl:grid xl:grid-cols-3">
        {cartItems.map((item, i) => (
          <CartProduct
            key={item.id}
            cartId={item.id}
            img={item.image}
            title={item.name}
            money={item.price}
            removeFromCart={removeItem}
            addToCart={handleCart}
          ></CartProduct>
        ))}
      </div>
      <div className="text-center py-8">
        <p className="text-4xl roboto font-bold text-gray-600">{`Total price: $${totalItemsPrice}`}</p>
      </div>
      {cartItems.length > 0 && (
        <div className="text-center pb-8">
          <button
            className="bg-yellow-500 text-4xl p-4 cursor-pointer text-white rounded-md hover:bg-gray-400 robot font-black"
            onClick={() => alert("...Loading")}
          >
            Check out
          </button>
        </div>
      )}
    </div>
  );
}
