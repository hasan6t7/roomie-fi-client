import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, LogOutUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOutUser()
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Logged Out!",
              text: "Log Out Successfully Done",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/browse-listing"}>Browse Listing</NavLink>
      <NavLink to={"/add-to-find-roommate"}>Add to Find Roommate</NavLink>
      <NavLink to={"/my-listing"}>My Listings</NavLink>
    </>
  );

  return (
    <div>
      {user ? (
        <>
          <div className="navbar rounded-2xl bg-purple-200">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm space-y-5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                  <div
                    id="img"
                    // onClick={() => navigate("/my-profile")}
                    className="avatar cursor-pointer "
                  >
                    <Tooltip anchorSelect="#img" content={user.displayName} />
                    <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2 ">
                      <img
                        className=""
                        src={user?.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="w-11/12 md:w-full  mx-auto">
                    <button
                      onClick={() => handleLogOut()}
                      className="relative cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-purple-700 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#27DEBF] transition-all ease-out duration-300"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative text-white font-semibold">
                        Log Out
                      </span>
                    </button>
                  </div>
                  <label className="swap swap-rotate ml-3">
                    <input onClick={toggleTheme} type="checkbox" />
                    <div className="swap-on">LIGHT</div>
                    <div className="swap-off">DARK</div>
                  </label>
                </ul>
              </div>
              <Link to={"/"} className="text-2xl font-bold text-purple-700 ">
                ROO<span className="text-purple-500">MIE-</span>
                <span className="text-purple-800">FI</span>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-5 items-center">
              {links}
            </div>
            <div className="navbar-end hidden lg:flex">
              <div className=" flex gap-5">
                <div className="">
                  <button
                    onClick={() => handleLogOut()}
                    className="relative cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-purple-700 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative text-white font-semibold">
                      Log Out
                    </span>
                  </button>
                </div>
                <div
                  id="img"
                  //   onClick={() => navigate("/my-profile")}
                  className="avatar cursor-pointer tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  {/* <Tooltip anchorSelect="#img" content={user.displayName} /> */}
                  <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2 ">
                    <img
                      className=""
                      src={user?.photoURL}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <label className="swap swap-rotate ">
                  <input onClick={toggleTheme} type="checkbox" />
                  <div className="swap-on">LIGHT</div>
                  <div className="swap-off">DARK</div>
                </label>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar rounded-2xl bg-purple-200 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                  <NavLink to={"/login"}>Login</NavLink>
                  <NavLink to={"/register"}>Register</NavLink>
                </ul>
              </div>
              <Link to={"/"} className="text-2xl  font-bold text-purple-700">
                ROO<span className="text-purple-500">MIE-</span>
                <span className="text-purple-800">FI</span>
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-3 text-sm">
                {links}

                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
