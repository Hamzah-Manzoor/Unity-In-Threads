import { useState } from "react";
import axios from "axios";
import Modal from "../ModalComponent/ModalWindow";

const UpdateProductRate = () => {
    // State variables for the input values and error message
    const [priceCode, setPriceCode] = useState("");
    const [rate, setRate] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    // Function to handle submission
    const handleSubmit = async () => {
        try {
            // Send the product rate data to the backend API
            const response = await axios.post("http://localhost:3000/update-product-rate", { priceCode, rate });
            setModalMessage(response.data.message);
            setModalOpen(true);
        } catch (error) {
            setModalMessage("Price code you want to update doesn't exist");
            setModalOpen(true);
        }
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
                        <h2 className="font-bold mb-8 text-white text-center text-3xl">
                            Update the Product Rate
                        </h2>
                        {/* Input fields */}
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Price code:</label>
                            <input
                                type="text"
                                placeholder="Enter price code"
                                value={priceCode}
                                onChange={(e) => setPriceCode(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-10">
                            <label className="text-lg font-semibold mb-1 text-white">Rate:</label>
                            <input
                                type="number"
                                placeholder="Enter rate"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                step="1" 
                                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-300 p-2"
                            />
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 hover:bg-green-700 px-10 text-white font-bold py-3 rounded-full text-lg"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleReset}
                                className="bg-orange-500 hover:bg-orange-600 px-10 text-white font-semibold py-3 rounded-full text-lg"
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

export default UpdateProductRate;
