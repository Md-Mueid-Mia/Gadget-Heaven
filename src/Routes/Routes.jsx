import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import GadgetCards from "../Components/GadgetCards";
import CardDetails from "../Pages/CardDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../products.json"),
        children: [
          {
            path: "/category",
            element: <GadgetCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/card/:product_id",
        element: <CardDetails />,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);
export default routes;
