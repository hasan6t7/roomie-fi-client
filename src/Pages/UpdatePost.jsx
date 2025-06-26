import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    title,
    amount,
    roomType,
    lifestyle,
    contact,
    location,
    availability,
    description,
    _id,
  } = useLoaderData();

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatePost = Object.fromEntries(formData.entries());

    fetch(`https://roommate-finder-server-two.vercel.app/roommates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Post updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-listing");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="p-5 lg:p-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Post</title>
        <link rel="canonical" />
      </Helmet>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-5xl font-semibold text-purple-700">
          Update Find Roommate Post
        </h1>
      </div>
      <form onSubmit={handleUpdatePost}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={user.displayName}
              readOnly
              className="input w-full"
              placeholder=" Name"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              readOnly
              className="input w-full"
              placeholder="Email "
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              defaultValue={title}
              name="title"
              className="input w-full"
              placeholder="Title Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              name="amount"
              defaultValue={amount}
              className="input w-full"
              placeholder="Rent Amount"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <select
              name="roomType"
              defaultValue={roomType}
              className="select w-full"
            >
              <option disabled={true}>Room Type-</option>
              <option>Single</option>
              <option>Shared</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <select
              name="lifestyle"
              defaultValue={lifestyle}
              className="select w-full"
            >
              <option disabled={true}>Lifestyle Preferences-</option>
              <option>Pets</option>
              <option>Smoking</option>
              <option>Night Owl</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Contact Inf</label>
            <input
              type="text"
              name="contact"
              defaultValue={contact}
              className="input w-full"
              placeholder="Contact Info"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              defaultValue={location}
              name="location"
              className="input w-full"
              placeholder="Location"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <select
            name="availability"
            defaultValue={availability}
            className="select w-full"
          >
            <option disabled={true}>Availability-</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>
        </fieldset>
        <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Description"
            defaultValue={description}
          ></textarea>
        </fieldset>
        <input
          type="submit"
          className="btn w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white"
          value="Update Post"
        />
      </form>
    </div>
  );
};

export default UpdatePost;
