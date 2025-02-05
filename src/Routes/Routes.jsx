import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import GadgetCards from "../Components/GadgetCards";
import CardDetails from "../Pages/CardDetails";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import Cart from "../Components/Cart";
import ErrorPage from "../Components/ErrorPage";
import Contact from "../Pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/dashboard",
        element: <Dashboard />,

        children: [
          {
            path: "/dashboard/cart",
            element: <Cart />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
