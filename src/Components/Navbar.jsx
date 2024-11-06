import { NavLink, useLocation, useOutletContext } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import "./navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={` ${
        pathname === "/"
          ? "p-2 pb-0 border border-b backdrop-blur-xl rounded-t-xl bg-white/50 container mx-auto"
          : "container mx-auto"
      }`}
    >
      <div
        className={`navbar md:px-32 ${
          pathname === "/"
            ? `bg-purple-600 rounded-t-xl text-white`
            : "bg-white"
        }`}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  space-x-5 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : " hover:text-warning"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : " hover:text-warning"
                  }`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : " hover:text-warning"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <NavLink to={"/"} className=" text-xl font-bold">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal space-x-5 px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : " hover:text-warning"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : " hover:text-warning"}`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : " hover:text-warning"}`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <NavLink
            to={"/dashboard"}
            className="p-2 rounded-full text-black cursor-pointer relative bg-slate-200"
          >
            <IoCartOutline className="text-xl" />
            {/* {count1 ? (
              <span class="badge absolute -top-3 -right-3">{count1}</span>
            ) : (
              ""
            )} */}
          </NavLink>
          <div className="p-2 rounded-full text-black cursor-pointer relative bg-slate-200">
            <CiHeart className="text-xl" />
            {/* {count2 ? (
              <span class="badge absolute -top-3 -right-3">{count2}</span>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
