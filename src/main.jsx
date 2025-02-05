import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Global CSS
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <Toaster />
  </StrictMode>
);
