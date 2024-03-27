import React, { useState } from "react";
import axios from "axios";
import Modal from "../ModalComponent/ModalWindow";

const SetProductRate = () => {
    // State variables for the input values
    const [priceCode, setPriceCode] = useState("");
    const [rate, setRate] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    
    // Function to handle submission
    const handleSubmit = () => {
        // Send the product rate data to the backend API
        axios.post("http://localhost:3000/set-product-rate", { priceCode, rate})
            .then(response => {
                // Handle successful response
                console.log("Product rate added successfully:", response.data);
                setModalMessage(`${priceCode} is set to -> Rs.${rate}`);
                setModalOpen(true);
            })
            .catch(error => {
                // Handle error
                if (error.response && error.response.status === 409) {
                    // If the error is due to duplicate price code, display specific message
                    console.error("Error adding product rate:", error);
                    setModalMessage("Price code already exists. Please enter a different price code.");
                    setModalOpen(true);
                } else {
                    // For other errors, display a generic message
                    console.error("Error adding product rate:", error);
                    setModalMessage("Failed to set product rate. Please try again later.");
                    setModalOpen(true);
                }
            });
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
            {/* Modal for displaying messages */}
            <Modal isOpen={modalOpen} message={modalMessage} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default SetProductRate;
