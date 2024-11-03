import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="min-h-[calc(100vh-480px)]">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
