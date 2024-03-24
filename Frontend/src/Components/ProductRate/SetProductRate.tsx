import React, { useState } from "react";

const SetProductRate = () => {
    // State variables for the input values
    const [priceCode, setPriceCode] = useState("");
    const [rate, setRate] = useState("");

    // Function to handle submission
    const handleSubmit = () => {
        alert(`${priceCode} is set to -> Rs.${rate}`);
    };

    // Function to handle reset
    const handleReset = () => {
        setPriceCode("");
        setRate("");
    };

    return (
        <div className="p-12">
            <div className="flex justify-center mb-4 bg-gray-700 p-3.5">
                <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-1 text-white text-center text-5xl">
                            Set the Product Rate
                        </h2>
                        {/* Input fields */}
                        <div className="mb-4">
                            <label className="text-white">Price code:</label>
                            <input
                                type="text"
                                placeholder="Enter price code"
                                value={priceCode}
                                onChange={(e) => setPriceCode(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Rate:</label>
                            <input
                                type="number"
                                placeholder="Enter rate"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                step="1" 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-center space-x-4">
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

export default SetProductRate;
