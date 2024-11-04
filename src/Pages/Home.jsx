import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import GadgetCards from "../Components/GadgetCards";
import { Helmet } from "react-helmet";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* banner */}
      <Banner />

      {/* Gadget cards with category */}
      <GadgetCards data={data} />
      <Outlet />
    </div>
  );
};

export default Home;
