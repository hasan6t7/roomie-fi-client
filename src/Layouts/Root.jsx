import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="max-w-[95%] mx-auto font">
      <ToastContainer />
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>{state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
