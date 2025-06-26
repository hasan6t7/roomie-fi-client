import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";
import MyPosts from "../Components/MyPosts";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyListing = () => {
  const { user, loading } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch("https://roommate-finder-server-two.vercel.app/roommates/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setDataLoading(false);
        });
    }
  }, [loading, user]);

  if (loading || dataLoading) {
    return <Loader />;
  }
  return (
    <div>
      {posts.length === 0 ? (
        <>
          <div>NO Post Found</div>
        </>
      ) : (
        <div className="my-20">
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Listing</title>
            <link rel="canonical" />
          </Helmet>
          <h1 className="text-4xl text-center font-bold text-purple-700 mb-16">
            <Slide delay={500} triggerOnce>
              <p> My Post List</p>
            </Slide>
          </h1>
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
              {posts.map((post, index) => (
                <MyPosts
                  posts={posts}
                  setPosts={setPosts}
                  post={post}
                  index={index}
                  key={post._id}
                ></MyPosts>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListing;
