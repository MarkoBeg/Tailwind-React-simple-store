import React from "react";
import Product from "./Product";

export default function Products({ products, handleCart }) {
  return (
    <div className="sm:flex sm:flex-col sm:items-center grid grid-cols-3  justify-items-center bg-gray-300 md:flex md:flex-col md: items-center lg:grid lg:grid-cols-2">
      {products.map((item, i) => (
        <Product
          key={item.id}
          productId={item}
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
          addToCart={handleCart}
        ></Product>
      ))}
    </div>
  );
}
