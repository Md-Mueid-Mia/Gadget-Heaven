import { useState } from "react";
import Wishlist from "../Components/Wishlist";
import Cart from "../Components/Cart";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [swipe, setSwipe] = useState("cart");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven || Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-purple-600 py-8 text-center text-white">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Dashboard</h1>
        <p className="md:w-6/12 mx-auto px-4">
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
