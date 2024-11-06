import React, { useEffect, useRef, useState } from "react";
import { GoSortAsc } from "react-icons/go";
import { getAllProduct, removeFromCart } from "./utilitis";
import CartDetails from "./CartDetails";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // add price in useState
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = getAllProduct();
    setProducts(cart);

    const calculatedTotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    setTotalPrice(calculatedTotal);
  }, []);

  const fixed = totalPrice.toFixed(2);
  const handleRemove = (product_id) => {
    removeFromCart(product_id);
    const cart = getAllProduct();
    setProducts(cart);
  };
  const handleSortData = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    console.log(sorted);
    setProducts(sorted);
  };

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  // delete all data from local storage
  const deleteAllData = () => {
    localStorage.removeItem("products");
    closeModal();
    navigate("/");
  };
  return (
    <div className="container px-4 md:px-32 mt-6 mx-auto">
      <div className="md:flex justify-between items-center p-4 mb-6">
        <h2 className="text-xl font-bold">Cart</h2>
        <div className="md:flex text-center item-center space-x-6">
          <h3 className="text-2xl font-bold">Total cost: $ {fixed}</h3>
          <button
            onClick={handleSortData}
            className="text-lg font-medium btn my-4 md:my-0 btn-outline hover:bg-purple-600 hover:text-white text-purple-600"
          >
            Sort by Price <GoSortAsc />
          </button>
          <button
            onClick={openModal}
            className="text-lg font-medium btn btn-outline hover:bg-purple-600 hover:text-white text-purple-600"
          >
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

      {/* Modal */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box text-center">
          <span className="text-7xl text-center text-green-500">
            <AiFillCheckCircle className="mx-auto mb-4" />
          </span>
          <h3 className="font-bold text-2xl">Payment Successfully!</h3>
          <div className="divider"></div>
          <p className="py-4">Thanks for purchasing.</p>
          <p>Total: ${fixed}</p>
          <div className="modal-action">
            {/* Button to close the modal */}
            <button onClick={deleteAllData} className="btn w-full">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
