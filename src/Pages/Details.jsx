import React, { useContext, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Details = () => {
  const data = useLoaderData();
  const [likes, setLikes] = useState(data.likes || 0);
  const [phoneNum, setPhoneNum] = useState();

  const { user } = useContext(AuthContext);

  const handleLike = async (email) => {
    if (email !== data.email) {
      try {
        const response = await fetch(
          `https://roommate-finder-server-two.vercel.app/roommates/like/${data._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (result.modifiedCount > 0) {
          setLikes(likes + 1);
          document.getElementById("#contact").classList.remove("hidden");
          setPhoneNum(data.contact);
        }
      } catch (error) {
        console.error("Error liking post:", error);
      }
    }
  };

  return (
    <div className="my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details </title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="text-4xl text-center  font-bold text-purple-700 mb-16 overflow-hidden">
        <Slide delay={500} triggerOnce>
          <p>Post Information Details</p>
        </Slide>
      </h1>
      <div className="p-10 border border-purple-400 rounded-xl bg-gradient-to-r via-violet-100 from-pink-100 to-purple-100 ">
        <h1 className="text-xl mb-4 font-semibold">
          <span className="font-bold">Name: </span> {data.name}
        </h1>

        <span className="font-bold text-xl">Title :</span>
        <p className="font-semibold mt-3  text-xl text-purple-600">
          {data.title}
        </p>

        <p className="text-lg mb-4 font-semibold mt-4">
          <span className="font-bold ">Location : </span> {data.location}
        </p>
        <p className="text-lg mb-4 font-semibold mt-4">
          <span className="font-bold ">Rent Amount : </span> ৳{" "}
          <span className="text-purple-600">{data.amount}</span> tk
        </p>

        <span className="font-bold text-xl">Email : </span>
        <p className="font-semibold mt-3 text-xl ">{data.email}</p>

        <div className="text-lg flex items-center gap-3 mb-4 font-semibold mt-4">
          <span className="font-bold">Lifestyle :</span>
          <span className="badge badge-outline badge-error">
            {data.lifestyle}
          </span>
        </div>
        <div className="text-lg flex items-center gap-3 mb-4 font-semibold mt-4">
          <span className="font-bold">Room Type :</span>
          <span className="badge badge-outline badge-error">
            {data.roomType}
          </span>
        </div>
        <div className="text-lg flex items-center gap-3 mb-4 font-semibold mt-4">
          <span className="font-bold">Availability :</span>
          <span className="badge badge-outline badge-error">
            {data.availability}
          </span>
        </div>
        <span className="font-bold text-xl">Description :</span>
        <p className="font-semibold mt-3  text-xl ">{data.description}</p>

        <p className="flex items-center gap-2 text-xl font-semibold mt-4">
          <span className="text-purple-700">{likes}</span>
          people interested in
        </p>
        <button
          onClick={() => handleLike(user.email)}
          className="btn mt-7 outline flex items-center gap-2"
        >
          <AiTwotoneLike size={25} />
          Like
        </button>
        <p id="#contact" className="text-lg mb-4 font-semibold mt-4 hidden">
          <span className="font-bold ">Contact : </span> {phoneNum}
        </p>
      </div>
    </div>
  );
};

export default Details;
