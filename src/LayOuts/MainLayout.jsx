import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const MainLayout = () => {
  const [count1, setCount1] = useState(null);
  const [count2, setCount2] = useState(null);
  const localData = localStorage.getItem("products");
  const cart = JSON.parse(localData);
  // Function to increment the first counter
  const incrementCount1 = () => setCount1(count1 + 1);
  // Function to increment the second counter
  const incrementCount2 = () => setCount2(count2 + 1);
  return (
    <>
      {/* Navbar */}
      <Navbar count1={count1} count2={count2} />
      {/* Main Content */}
      <section className="min-h-[calc(100vh-480px)]">
        <Outlet
          count1={count1}
          count2={count2}
          incrementCount1={incrementCount1}
          incrementCount2={incrementCount2}
        />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
