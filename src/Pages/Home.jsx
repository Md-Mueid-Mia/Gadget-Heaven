import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GadgetCards from "../Components/GadgetCards";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      {/* banner */}
      <Banner />

      {/* Gadget cards with category */}
      <GadgetCards data={data} />
      <Outlet />
    </div>
  );
};

export default Home;
