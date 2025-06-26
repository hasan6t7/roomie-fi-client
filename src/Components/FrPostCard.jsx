import React from "react";
import { useNavigate } from "react-router";

const FrPostCard = ({ roommate }) => {
  const navigate = useNavigate();
  
  return (
    <div className=" ">
      <div className="p-10 border border-purple-400 rounded-xl bg-gradient-to-r via-violet-100 from-pink-100 to-purple-100 h-[270px] text-black">
        <h1 className="text-xl mb-4 font-semibold">
          <span className="font-bold">Name: </span> {roommate.name}
        </h1>
        <p className="px-5 py-1 rounded-full badge badge-[#8200DB]">
          {roommate.title}
        </p>
        <p className="text-lg mb-4 font-semibold mt-4">
          <span className="font-bold ">Location : </span> {roommate.location}
        </p>
        <button
          onClick={() => navigate(`/details/${roommate._id}`)}
          className="btn bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white w-full mt-5"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default FrPostCard;
