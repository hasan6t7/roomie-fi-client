import React from "react";
import { Link } from "react-router";

const C404 = () => {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <h1 className="text-center font-bold text-warning text-5xl pt-10">
          Oops!!!
        </h1>
        <img
          className="mx-auto w-1/2"
          src="https://i.ibb.co.com/0VRByGpm/6338750.jpg"
          alt=""
        />
        <p className="py-3 text-center opacity-80">
          The page you looking for doesn't exist
        </p>
      </div>
      <Link to={"/"}>
        <button className="cursor-pointer flex justify-center items-center mx-auto mb-10 pt-5">
          <p className="w-full relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-purple-700 group-hover:bg-purple-700"></span>
            <span className="relative text-black group-hover:text-white">
              Go Back Home
            </span>
          </p>
        </button>
      </Link>
    </div>
  );
};

export default C404;
