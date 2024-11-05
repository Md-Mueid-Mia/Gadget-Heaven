import { Link } from "react-router-dom";
import GadgetCards from "./GadgetCards";

const Banner = () => {
  return (
    <>
      <div
        className={`container mx-auto rounded-b-lg p-2 border border-t md:mb-96 pt-0 relative`}
      >
        <div className="bg-purple-600 rounded-b-lg">
          <div className="text-center p-6 md:pb-72 ">
            <h1 className="text-3xl text-white md:w-[1122px] mx-auto md:text-[56px] md:leading-[72px] font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories{" "}
            </h1>
            <p className="my-6 text-white md:w-[796px] mx-auto ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <a href="#gadgets" className="btn text- font-bold  text-purple-600">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="md:max-w-[900px] hidden md:flex hero p-6 border absolute -bottom-48 md:-bottom-32 left-[50%] translate-x-[-50%] rounded-[32px] backdrop-blur-xl bg-white/40">
        <img
          className="rounded-[32px] md:h-[563px] w-fit object-cover"
          src="https://i.ibb.co.com/W3dpNWQ/banner.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
