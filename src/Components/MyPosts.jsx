import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyPosts = ({ post, index, setPosts, posts }) => {
  const navigate = useNavigate();
  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-two.vercel.app/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
              const remainingPost = posts.filter((post) => post._id !== id);
              setPosts(remainingPost);
            }
          });
      }
    });
  };
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="font-semibold text-lg">{post.name}</div>
        </td>
        <td className="font-semibold">{post.email}</td>
        <td className="font-semibold flex items-center gap-1">
          <TbCurrencyTaka /> {post.amount} tk
        </td>
        <th className="">
          <button
            onClick={() => handleDeletePost(post._id)}
            className="btn btn-ghost btn-xs mr-2 border border-purple-500 text-purple-700"
          >
            Delete
          </button>
          <button
            onClick={() => navigate(`/update-post/${post._id}`)}
            className="btn btn-ghost btn-xs border border-purple-500 text-purple-700"
          >
            Update
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyPosts;
