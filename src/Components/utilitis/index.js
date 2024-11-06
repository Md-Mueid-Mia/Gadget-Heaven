import toast from "react-hot-toast";

// get all data from local storage
const getAllProduct = () => {
  const data = localStorage.getItem("products");
  if (data) {
    const cart = JSON.parse(data);
    return cart;
  } else {
    console.log("no data");
    return [];
  }
};

// local storage add data
const addToCart = (product) => {
  const cart = getAllProduct();
  // const isExist = cart.map((item) => item.product_id == product.product_id);

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

// wishlist
const getAllProductFromWishlist = () => {
  const data = localStorage.getItem("wishlist");
  if (data) {
    const cart = JSON.parse(data);
    console.log(cart);
    return cart;
  } else {
    return [];
  }
};
const addToWishlist = (product) => {
  const cart = getAllProductFromWishlist();
  cart.push(product);
  localStorage.setItem("wishlist", JSON.stringify(cart));
  toast.success("Product added to Wishlist");
};
const removeFromWishlist = (product_id) => {
  const cart = getAllProduct();
  const newCart = cart.filter((item) => item.product_id !== product_id);
  localStorage.setItem("wishlist", JSON.stringify(newCart));
};
export {
  addToCart,
  getAllProduct,
  removeFromCart,
  getAllProductFromWishlist,
  addToWishlist,
  removeFromWishlist,
};
