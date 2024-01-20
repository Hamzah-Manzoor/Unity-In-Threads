import React from 'react';

function Sherwani({heading}) {
  return (
    <form className="w-full text-center">
      <h1 className='p-4 text-5xl text-slate-50'>{heading}</h1>
  
      {/* General Information */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 p-3 mb-2">
          <label htmlFor="customerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Customer Name"
            required
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="sizeFor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Size For (Product)
          </label>
          <input
            type="text"
            id="sizeFor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Size For (Product)"
            required
          />
        </div>
      </div>
  
      {/* Upper Garment Size */}
      <div className="p-4 text-2xl text-slate-50">Upper Garment Size</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Length, Gap, Sleeves */}
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Length
          </label>
          <input
            type="number"
            id="length"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Length"
            required
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="gap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Gap
          </label>
          <input
            type="number"
            id="gap"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gap"
            required
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="sleeves" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sleeves
          </label>
          <input
            type="number"
            id="sleeves"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sleeves"
            required
          />
        </div>
        {/* 'ВТ, Head Size */}
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="vt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            'ВТ
          </label>
          <input
            type="number"
            id="vt"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="'ВТ"
            required
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="headSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Head Size
          </label>
          <input
            type="number"
            id="headSize"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Head Size"
            required
          />
        </div>
      </div>
  
      {/* Bottom Garment Size */}
      <div className="p-4 text-2xl text-slate-50">Bottom Garment Size</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Bottom, Foot Size */}
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="bottom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Bottom
          </label>
          <input
            type="number"
            id="bottom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bottom"
            required
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="footSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Foot Size
          </label>
          <input
            type="number"
            id="footSize"
            className="border bg-gray-50 border-gray-50"
            ></input>
            </div>
            </div>
            </form>
  );
            
}

export default Sherwani;
