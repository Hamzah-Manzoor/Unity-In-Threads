import React from 'react'

export default function Returns() {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <form className="w-72">
        <div className="text-center">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Product category
          </label>
          <select
            id="Product category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Sherwani</option>
            <option>Suits</option>
            <option>Kameez Shalwar</option>
          </select>
        </div>

        <div className="mt-4 text-center">
        <label htmlFor="product-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ProductID</label>
      <input
        type="text"
        id="product-id"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Product ID"
      />
        </div>
        <div className="mt-4 text-center">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Reason For Returns/Exchange
          </label>
          <textarea
            id="message"
            rows="4"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2.5"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Submit</button>
      </form>
    </div>
  )
}
