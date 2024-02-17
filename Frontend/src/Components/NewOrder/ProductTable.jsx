import React, { useState } from 'react';
import FinalizeOrder from './FinalizeOrder';

const ProductTable = ({ orders, formFieldHeadings }) => {
  const [showFinalizeOrder, setShowFinalizeOrder] = useState(false); // State variable to toggle FinalizeOrder component visibility

  return (
    <div className="relative m-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* Dynamically generate table headers based on newOrder array */}
            {formFieldHeadings.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
            {/* Action column */}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {orders.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* Table data cells */}
              {Object.keys(item).map((key, idx) => (
                <td key={idx} className="px-6 py-4">
                  {item[key]}
                </td>
              ))}
              {/* Action buttons */}
              <td className="flex items-center px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Close order button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white m-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setShowFinalizeOrder(true)}
        >
          Close Order
        </button>
      </div>
      {/* Render FinalizeOrder component conditionally */}
      {showFinalizeOrder && <FinalizeOrder />}
    </div>
  );
};

export default ProductTable;