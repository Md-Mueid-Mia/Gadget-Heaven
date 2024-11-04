import { useState } from "react";
import toast from "react-hot-toast";

const incrementCounter = (price) => {
  setCount(count + 1); // Increment count by 1
  setTotalPrice(totalPrice + price); // Add price to total
};
// get all data from local storage
const getAllProduct = () => {
  const data = localStorage.getItem("products");
  console.log(data);
  if (data) {
    const cart = JSON.parse(data);
    console.log(cart);
    return cart;
  } else {
    console.log("no data");
    return [];
  }
};

// local storage add data
const addToCart = (product) => {
  const cart = getAllProduct();
  const isExist = cart.map((item) => item.product_id == product.product_id);
  if (isExist) {
  }
  cart.push(product);
  localStorage.setItem("products", JSON.stringify(cart));
  toast.success("Product added to cart");
};
// remove data from local storage
const removeFromCart = (product_id) => {
  const cart = getAllProduct();
  const newCart = cart.filter((item) => item.product_id !== product_id);
  localStorage.setItem("products", JSON.stringify(newCart));
  toast.success("Successfully Product removed");
};

export { addToCart, getAllProduct, removeFromCart, incrementCounter };
