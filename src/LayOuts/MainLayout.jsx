import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const MainLayout = () => {
  const [count1, setCount1] = useState(null); // Initialize with 0 instead of null
  const [count2, setCount2] = useState(null); // Initialize with 0 instead of null
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
    setPrice1((count1 + 1) * itemPrice1); // Update price based on new count
  };

  // Function to increment the second counter and update price2
  const incrementCount2 = () => {
    setCount2(count2 + 1);
    setPrice2((count2 + 1) * itemPrice2); // Update price based on new count
  };

  return (
    <>
      {/* Navbar */}
      <Navbar count1={count1} count2={count2} price1={price1} price2={price2} />
      {/* Main Content */}
      <section className="min-h-[calc(100vh-480px)]">
        <Outlet
          context={{
            count1,
            count2,
            price1,
            price2,
            incrementCount1,
            incrementCount2,
          }}
        />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
