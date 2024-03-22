import React, { useState } from "react";

const BreakUpProduct = () => {
    // State variables for the input values
    const [OldProductcode, setOldProductCode] = useState("");
    const [ConOldProductcode, setConOldProductCode] = useState("");
    const [NewProduct1Code, setNewProduct1Code] = useState("");
    const [ConfirmNewProduct1Code, setConfirmNewProduct1Code] = useState("");
    const [NewProduct2Code, setNewProduct2Code] = useState("");
    const [ConfirmNewProduct2Code, setConfirmNewProduct2Code] = useState("");
    const [quantity, setQuantity] = useState("");
    const [Details, setDetails] = useState("");

    // Function to handle submission
    const handleSubmit = () => {
        
    };

    // Function to handle reset
    const handleReset = () => {
        setOldProductCode("");
        setConOldProductCode("");
        setNewProduct1Code("");
        setConfirmNewProduct1Code("");
        setNewProduct2Code("");
        setConfirmNewProduct2Code("");
        setQuantity("");
        setDetails("");
    };

    return (
        <div className="p-4">
            <div className="flex justify-center mb-4 bg-gray-700 p-3.5">
                <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-1 text-white text-center text-5xl p-3">
                            Break Up Products (Ready Made Only)
                        </h2>
                        {/* Input fields */}
                        <div className="mb-4">
                            <label className="text-white">Old Product Code:</label>
                            <input
                                type="text"
                                placeholder="Enter product code"
                                value={OldProductcode}
                                onChange={(e) => setOldProductCode(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Confirm Old Product Code:</label>
                            <input
                                type="text"
                                placeholder="Enter product code"
                                value={ConOldProductcode}
                                onChange={(e) => setConOldProductCode(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Quantity to be shifted :</label>
                            <input
                                type="number"
                                placeholder="Enter quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                step="1" 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">New Product 1 Code:</label>
                            <input
                                type="text"
                                placeholder="Enter new product 1 code"
                                value={NewProduct1Code}
                                onChange={(e) => setNewProduct1Code(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Confirm New Product 1 Code:</label>
                            <input
                                type="text"
                                placeholder="Enter new product 1 Code"
                                value={ConfirmNewProduct1Code}
                                onChange={(e) => setConfirmNewProduct1Code(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">New Product 2 Code:</label>
                            <input
                                type="text"
                                placeholder="Enter new product 2 code"
                                value={NewProduct2Code}
                                onChange={(e) => setNewProduct2Code(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Confirm New Product 2 Code:</label>
                            <input
                                type="text"
                                placeholder="Enter new product 2 Code"
                                value={ConfirmNewProduct2Code}
                                onChange={(e) => setConfirmNewProduct2Code(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Details:</label>
                        </div>
                        <div>
                            <textarea rows={4} cols={50} value={Details} onChange={(e)=> setDetails(e.target.value)} style={{marginLeft:20}}> </textarea>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 p-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white font-semibold p-3 rounded-full"
                            >
                                Submit
                            </button>
                            <button
                                onClick={handleReset}
                                className="bg-orange-500 text-white font-semibold p-3 rounded-full"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakUpProduct;
