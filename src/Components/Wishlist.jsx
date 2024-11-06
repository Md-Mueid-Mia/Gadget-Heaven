import React, { useEffect, useState } from "react";
import { getAllProductFromWishlist, removeFromWishlist } from "./utilitis";
import WishlistDetails from "./WishlistDetails";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cart = getAllProductFromWishlist();
    setProducts(cart);
  }, []);
  const handleRemove = (product_id) => {
    removeFromWishlist(product_id);
    const cart = getAllProductFromWishlist();
    setProducts(cart);
  };
  return (
    <div className="container md:px-32 px-6 mt-6 mx-auto">
      {/*  */}
      <h2 className="text-xl font-bold">Wishlist</h2>
      <div>
        {products.map((product, index) => (
          <WishlistDetails
            handleRemove={handleRemove}
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
