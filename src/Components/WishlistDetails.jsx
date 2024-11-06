import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { addToCart, removeFromWishlist } from "./utilitis";
import { MdOutlineShoppingCart } from "react-icons/md";

const WishlistDetails = ({ product, handleRemove }) => {
  const { product_title, product_image, price, product_id, description } =
    product || {};
  const handleToCart = (product) => {
    addToCart(product);
    handleRemove(product_id);
  };
  return (
    <div className="flex p-4 shadow-xl md:w-4/5 mx-auto border relative rounded-xl gap-6 mb-6">
      <div>
        <img className="w-48 h-32 rounded-xl" src={product_image} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold">{product_title}</h3>
        <p className="text-lg my-2">{description}</p>
        <p className="text-xl font-semibold">Price: $ {price}</p>
        <button
          onClick={() => handleToCart(product)}
          className="btn mt-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-lg font-bold"
        >
          Add To Cart <MdOutlineShoppingCart />
        </button>
      </div>
      <div
        onClick={() => handleRemove(product_id)}
        className="absolute top-5 right-8"
      >
        <IoIosCloseCircleOutline className="text-3xl text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default WishlistDetails;
