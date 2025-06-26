import React from "react";
import { useLoaderData } from "react-router";
import FrPostCard from "./FrPostCard";
import { Slide } from "react-awesome-reveal";

const FrPost = () => {
  const initialRoommates = useLoaderData();
  const filterRoommate = initialRoommates.filter(
    (roommate) => roommate.availability === "Available"
  );
  

  return (
    <div className="my-20">
      <h1 className="text-4xl text-center font-bold text-purple-700">
        <Slide delay={500}  triggerOnce>
          <p>Featured Roommate Post</p>
        </Slide>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-14">
        {filterRoommate.map((roommate) => (
          <FrPostCard roommate={roommate} key={roommate._id}></FrPostCard>
        ))}
      </div>
    </div>
  );
};

export default FrPost;
