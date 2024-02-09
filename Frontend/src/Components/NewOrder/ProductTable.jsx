import React, { useState } from 'react';
import FinalizeOrder from './FinalizeOrder';

const ProductTable = ({orders}) => {


  const [showFinalizeOrder, setShowFinalizeOrder] = useState(false); // State variable to toggle FinalizeOrder component visibility

  return (
    <div className="relative m-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Accessories
            </th>
            <th scope="col" className="px-6 py-3">
              Available
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Sample table rows, you can add more rows as needed */}
          {
            orders.map((item , index)=>{
                return (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
        {/* productName,
        productCode,
        stitchingCode,
        designCode,
        fabricCode,
        patchingFabricCode1,
        patchingFabricCode2,
        rate,
        quantity, */}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.productName}
            </td>
            <td className="px-6 py-4">{item.productCode}</td>
            <td className="px-6 py-4">{item.stitchingCode}</td>
            <td className="px-6 py-4">{item.designCode}</td>
            <td className="px-6 py-4">{item.fabricCode}</td>
            <td className="px-6 py-4">{item.patchingFabricCode1}</td>
            <td className="px-6 py-4">{item.patchingFabricCode2}</td>
            <td className="flex items-center px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                Remove
              </a>
            </td>
          </tr>
                )
            })
          }
          
          {/* Add more table rows as needed */}
        </tbody>
      </table>
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
