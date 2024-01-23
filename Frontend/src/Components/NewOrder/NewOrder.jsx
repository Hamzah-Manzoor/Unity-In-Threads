import React, { useState } from 'react';
import ProductTable from './ProductTable';

const NewOrder = () => {
  // States to store form values
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [stitchingCode, setStitchingCode] = useState('');
  const [designCode, setDesignCode] = useState('');
  const [fabricCode, setFabricCode] = useState('');
  const [patchingFabricCode1, setPatchingFabricCode1] = useState('');
  const [patchingFabricCode2, setPatchingFabricCode2] = useState('');
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [orders, setorders] = useState([])

  const handleProductChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
        productName,
        productCode,
        stitchingCode,
        designCode,
        fabricCode,
        patchingFabricCode1,
        patchingFabricCode2,
        rate,
        quantity,
      };

    setorders(prevorders =>[...prevorders , newOrder])

    setProductName('');
    setProductCode('');
    setStitchingCode('');
    setDesignCode('');
    setFabricCode('');
    setPatchingFabricCode1('');
    setPatchingFabricCode2('');
    setRate(0);
    setQuantity(0);

    // Perform form submission logic here
    
  };

  return (
    <div className="">
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <h1 className='p-4 text-5xl text-slate-50'>New Order</h1>
      <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select your product
      </label>
      <select
        id="productName"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={productName}
        onChange={handleProductChange}
      >
        <option value="Sherwani">Sherwani</option>
        <option value="Suits">Suits</option>
        <option value="Three Piece">Three Piece</option>
        <option value="Prince Coat">Prince Coat</option>
        <option value="Waist Coat">Waist Coat</option>
      </select>

      {/* Additional input fields */}
      <div className="mb-5">
        {/* Add other input fields as needed */}
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
        {/* Add other input fields in a similar manner */}
      </div>

      <div className="mb-5">
        <label htmlFor="stitchingCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Stitching Code
        </label>
        <input
          type="text"
          id="stitchingCode"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={stitchingCode}
          onChange={(e) => setStitchingCode(e.target.value)}
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
          value={designCode}
          onChange={(e) => setDesignCode(e.target.value)}
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
          value={fabricCode}
          onChange={(e) => setFabricCode(e.target.value)}
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
          value={patchingFabricCode1}
          onChange={(e) => setPatchingFabricCode1(e.target.value)}
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
          value={patchingFabricCode2}
          onChange={(e) => setPatchingFabricCode2(e.target.value)}
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
    value={rate}
    onChange={(e) => setRate(e.target.value)}
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
    onChange={(e) => setQuantity(e.target.value)}
  />
</div>

{/* ... (Continue with other input fields) */}

      
      {/* Add other form fields as needed */}

      <button
        type="submit"
        className="text-white mb-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e)=>{handleSubmit(e)}}        
      >
        Submit
      </button>    
    </form>
            <div className="">
                {
                    orders.length>0 &&
                    <ProductTable orders={orders}></ProductTable>
                }
            </div>
    </div>
    
  );
};

export default NewOrder;
