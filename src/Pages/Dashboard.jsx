import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Wishlist from "../Components/Wishlist";
import Cart from "../Components/Cart";

const Dashboard = () => {
  const [swipe, setSwipe] = useState("cart");
  const handleCartAndWishlist = (name) => {
    console.log(name);
  };
  return (
    <div>
      <div className="bg-purple-600 py-8 text-center text-white">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Dashboard</h1>
        <p className="md:w-6/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-6 mt-8">
          <button
            onClick={() => setSwipe("cart")}
            className="text-lg btn font-semibold active:bg-white active:text-purple-600 text-purple-600 rounded-full"
          >
            Cart
          </button>

          <button
            onClick={() => setSwipe("")}
            className="text-lg btn font-semibold active:bg-white active:text-purple-600 text-purple-600 rounded-full"
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>{swipe === "cart" ? <Cart /> : <Wishlist />}</div>
    </div>
  );
};

export default Dashboard;
