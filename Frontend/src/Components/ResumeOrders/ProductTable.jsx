import React, { useEffect } from 'react';

function ProductTable({ orders }) {
    // console.log(orders[0].orders[0].quantity)



    // useEffect(() => {
      
    // }, [])
    

    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              OBD No.
            </th>
            <th scope="col" className="px-6 py-3">
              Size From
            </th>
            <th scope="col" className="px-6 py-3">
              Total Products
            </th>
            <th scope="col" className="px-6 py-3">
              Factory Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            
            <tr key={index} className={index % 2 === 0 ? 'even:bg-gray-50 even:dark:bg-gray-800' : 'odd:bg-white odd:dark:bg-gray-900 border-b dark:border-gray-700'}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.orderID}</td>
              <td className="px-6 py-4">{order.orderID}</td>
              <td className="px-6 py-4">{order.category}</td>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Resume</button>              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
