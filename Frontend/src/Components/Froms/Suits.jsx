import React from 'react';

function Suits({heading}) {
  return (
    <form className="w-full text-center">
      <h1 className='p-4 text-5xl text-slate-50'>{heading}</h1>
      <div className="p-3 mb-2">
        <label htmlFor="chestSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Garnment Chest size
        </label>
        <input
          type="number"
          id="chestSize"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Garnment Chest size"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="shoulderMeasurement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Shoulder Measurement
        </label>
        <input
          type="number"
          id="shoulderMeasurement"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Shoulder Measurement"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="neck" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Neck
        </label>
        <input
          type="number"
          id="neck"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Neck"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="sleeveLength" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sleeves Length
        </label>
        <input
          type="number"
          id="sleeveLength"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sleeves Length"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="sherwaniLength" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Waist
        </label>
        <input
          type="number"
          id="sherwaniLength"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sherwani Length"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="sherwaniLength" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Seat
        </label>
        <input
          type="number"
          id="sherwaniLength"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sherwani Length"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="sherwaniLength" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Thigh
        </label>
        <input
          type="number"
          id="sherwaniLength"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sherwani Length"
          required
        />
      </div>
      <div className="p-3 mb-2">
        <label htmlFor="sherwaniLength" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Bottom
        </label>
        <input
          type="number"
          id="sherwaniLength"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sherwani Length"
          required
        />
      </div>
      {/* Additional input fields can be added similarly */}
      <button
        type="submit"
        className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default Suits;
