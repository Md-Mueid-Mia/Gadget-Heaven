import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishlist } from "../Components/utilitis";

const CardDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specifications = [],
    availability,
    rating,
  } = product || {};

  const [spec1, spec2, spec3] =
    specifications.length >= 3 ? specifications : ["N/A", "N/A", "N/A"];

  useEffect(() => {
    const product = data.find(
      (item) => item.product_id === parseInt(product_id)
    );
    setProduct(product);
  }, []);

  const handleToCart = (product) => {
    addToCart(product);
  };
  const handleWishlist = (product) => {
    addToWishlist(product);
  };
  return (
    <div className="pb-[620px] md:pb-[300px]">
      <div className="bg-purple-600 container mx-auto text-center text-white px-4 pb-56 relative">
        <h2 className="text-xl md:text-3xl font-bold pt-6">Product Details</h2>
        <p className="md:w-[796px] mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/*  */}
      <div className="p-8  bg-white rounded-3xl absolute w-[320px] md:w-[880px] top-56 left-[50%] translate-x-[-50%] border">
        <div className="rounded-3xl bg-white md:flex gap-5 ">
          <img
            className="md:w-2/5 h-[350px] mb-4 my-auto rounded-xl "
            src={product_image}
            alt=""
          />
          <div className="">
            <h3 className="md:text-3xl font-semibold mb-3">{product_title}</h3>
            <h4 className="text-xl font-semibold mb-4">Price: $ {price}</h4>
            <button className="text-green-700 mb-4 bg-green-300 px-4 py-2 border border-green-700 rounded-full">
              {availability}
            </button>
            <p>{description}</p>
            <p className="text-lg font-bold">Specification:</p>
            <ul className="">
              <p>1. {spec1}</p>
              <p>2. {spec2}</p>
              <p>3. {spec3}</p>
            </ul>

            <p className="text-lg font-bold">Rating:</p>
            <div className="flex items-center">
              <IoMdStar className="text-2xl text-yellow-400" />
              <IoMdStar className="text-2xl text-yellow-400" />
              <IoMdStar className="text-2xl text-yellow-400" />
              <IoMdStar className="text-2xl text-yellow-400" />
              <CiStar className="text-2xl " />
              <span className="badge ml-2 text-lg ">{rating}</span>
            </div>
            <div className="flex mt-5">
              <button
                onClick={() => handleToCart(product)}
                className="btn bg-purple-600 hover:bg-purple-700 rounded-full text-white text-lg font-bold"
              >
                Add To Cart <MdOutlineShoppingCart />
              </button>
              <button
                onClick={() => handleWishlist(product)}
                className="btn rounded-full ml-4"
              >
                <CiHeart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
