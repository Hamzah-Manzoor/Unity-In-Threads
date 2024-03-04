import React, { useState } from 'react';

function OrderDelivery() {
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(0); // Assuming quantity is an integer

  const [details, setDetails] = useState('');

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using state variables: productCode, quantity, details
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 className='p-4 text-5xl text-slate-50'>Enter Customer Details for Delivery</h1>
        <div className="mb-5">
          <label htmlFor="productCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Code
          </label>
          <input
            type="text"
            id="productCode"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-5">
      <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
      <textarea
        id="details"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write any specific details here..."
        value={details}
        onChange={handleDetailsChange}
      ></textarea>
    
        </div>

        <button type="submit" className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>
  );
}

export default OrderDelivery;
