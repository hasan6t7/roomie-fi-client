import React from "react";
import { useLoaderData } from "react-router";
import BlTable from "../Components/BlTable";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const BrowseListing = () => {
  const data = useLoaderData();

  return (
    <div className="my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Browse Listing </title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="text-4xl text-center font-bold text-purple-700 mb-16">
        <Slide delay={500} triggerOnce>
          <p>Find Roommate All Posts</p>
        </Slide>
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Rent Amount</th>
                <th></th>
              </tr>
            </thead>
            {data.map((singleData, index) => (
              <BlTable
                key={singleData._id}
                index={index}
                singleData={singleData}
              ></BlTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
