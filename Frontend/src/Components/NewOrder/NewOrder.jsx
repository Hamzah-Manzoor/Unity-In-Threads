import React from 'react';

const NewOrder = () => {
  return (
    <form className="max-w-sm mx-auto my-8">
      <h1 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">Registration Form</h1>
      <div className="mb-5">
        <label htmlFor="products" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Choose Product Name
        </label>
        <select
          id="products"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Sherwani</option>
          <option>Shalwar Kameez</option>
          <option>Pant Coat</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="productCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product Code
        </label>
        <input
          type="text"
          id="productCode"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Product Code"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="stitchingCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Stitching Code
        </label>
        <input
          type="text"
          id="stitchingCode"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Stitching Code"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="designCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Design Code
        </label>
        <input
          type="text"
          id="designCode"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Design Code"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="fabricCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Fabric Code
        </label>
        <input
          type="text"
          id="fabricCode"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Fabric Code"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="patchingFabricCode1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Patching Fabric Code 1
        </label>
        <input
          type="text"
          id="patchingFabricCode1"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Patching Fabric Code 1"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="patchingFabricCode2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Patching Fabric Code 2
        </label>
        <input
          type="text"
          id="patchingFabricCode2"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Patching Fabric Code 2"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Rate
        </label>
        <input
          type="number"
          id="rate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Rate"
          required
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
          placeholder="Quantity"
          required
        />
      </div>
      
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Product
      </button>
      
      
    </form>
  );
};

export default NewOrder;
