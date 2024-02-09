import React, { useState } from 'react';

const FinalizeOrder = () => {
  // States to store form values
  const [refSizeForm, setRefSizeForm] = useState('');
  const [tryDateFactory, setTryDateFactory] = useState('');
  const [tryDateActual, setTryDateActual] = useState('');
  const [deliveryDateFactory, setDeliveryDateFactory] = useState('');
  const [deliveryDateActual, setDeliveryDateActual] = useState('');
  const [notes, setNotes] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic to submit form data to the database goes here

    // Reset form fields after submission
    setRefSizeForm('');
    setTryDateFactory('');
    setTryDateActual('');
    setDeliveryDateFactory('');
    setDeliveryDateActual('');
    setNotes('');
  };

  // Function to handle closing entry
  const handleClose = () => {
    // Logic to close the entry
  };

  // Function to handle reopening entry
  const handleReopen = () => {
    // Logic to reopen the entry
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="p-4 text-5xl text-slate-50">Finalize Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="refSizeForm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ref Size Form
          </label>
          <input
            type="text"
            id="refSizeForm"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={refSizeForm}
            onChange={(e) => setRefSizeForm(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="tryDateFactory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Try Date (Factory)
          </label>
          <input
            type="date"
            id="tryDateFactory"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={tryDateFactory}
            onChange={(e) => setTryDateFactory(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="tryDateActual" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Try Date (Actual)
          </label>
          <input
            type="date"
            id="tryDateActual"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={tryDateActual}
            onChange={(e) => setTryDateActual(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="deliveryDateFactory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Delivery Date (Factory)
          </label>
          <input
            type="date"
            id="deliveryDateFactory"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={deliveryDateFactory}
            onChange={(e) => setDeliveryDateFactory(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="deliveryDateActual" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Delivery Date (Actual)
          </label>
          <input
            type="date"
            id="deliveryDateActual"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={deliveryDateActual}
            onChange={(e) => setDeliveryDateActual(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Notes
          </label>
          <textarea
            id="notes"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleClose}
            className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleReopen}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Re-Open Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalizeOrder;
