import React, { useEffect, useState } from "react";
import { GoSortAsc } from "react-icons/go";
import { getAllProduct, removeFromCart } from "./utilitis";
import CartDetails from "./CartDetails";

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cart = getAllProduct();
    console.log(cart);
    setProducts(cart);
  }, []);
  console.log(products);

  const handleRemove = (product_id) => {
    removeFromCart(product_id);
    const cart = getAllProduct();
    setProducts(cart);
  };
  return (
    <div className="container md:px-32 mt-6 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Cart</h2>
        <div className="flex item-center space-x-6">
          <h3 className="text-2xl font-bold">Total cost: $ 999.99</h3>
          <button className="text-lg font-medium btn btn-outline hover:bg-purple-600 hover:text-white text-purple-600">
            Sort by Price <GoSortAsc />
          </button>
          <button className="text-lg font-medium btn btn-outline hover:bg-purple-600 hover:text-white text-purple-600">
            Purchase
          </button>
        </div>
      </div>
      {products.map((product, index) => (
        <CartDetails
          key={index}
          product={product}
          handleRemove={handleRemove}
        ></CartDetails>
      ))}
    </div>
  );
};

export default Cart;
