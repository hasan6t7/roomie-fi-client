import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";

const BlTable = ({ singleData, index }) => {
  const navigate = useNavigate();
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="font-semibold text-lg">{singleData.name}</div>
        </td>
        <td className="font-semibold">{singleData.email}</td>
        <td className="font-semibold flex items-center gap-1">
          <TbCurrencyTaka /> {singleData.amount} tk
        </td>
        <th>
          <button
            onClick={() => navigate(`/details/${singleData._id}`)}
            className="btn btn-ghost btn-xs border border-purple-500 text-purple-700"
          >
            See More
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default BlTable;
