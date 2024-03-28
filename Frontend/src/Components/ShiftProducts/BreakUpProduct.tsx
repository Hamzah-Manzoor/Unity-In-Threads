import { useState } from "react";
import Modal from "../ModalComponent/ModalWindow";

const BreakUpProduct = () => {
    // State variables for the input values
    const [OldProductcode, setOldProductCode] = useState("");
    const [ConOldProductcode, setConOldProductCode] = useState("");
    const [Product1PriceCode, setProduct1PriceCode] = useState("");
    const [Product2PriceCode, setProduct2PriceCode] = useState("");
    const [NewProduct1Code, setNewProduct1Code] = useState("");
    const [ConfirmNewProduct1Code, setConfirmNewProduct1Code] = useState("");
    const [NewProduct2Code, setNewProduct2Code] = useState("");
    const [ConfirmNewProduct2Code, setConfirmNewProduct2Code] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [Details, setDetails] = useState("");
    const [showSplittedProducts, setShowSplittedProducts] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");



    // Function to handle submission
    const handleSubmit = () => {
        // Parse the original product code
        const [prefix, priceCode, fabricCode, size, color] = OldProductcode.split("-");
        
        // Determine new price codes for pant and coat
        const pantPriceCode = "PT-" + (Product1PriceCode || priceCode) + "-" + fabricCode + "-" + size + "-" + color;
        const coatPriceCode = "CT-" + (Product2PriceCode || priceCode) + "-" + fabricCode + "-" + size + "-" + color;

        // Update the state variables for the new product codes
        setNewProduct1Code(pantPriceCode);
        setConfirmNewProduct1Code(pantPriceCode);
        setNewProduct2Code(coatPriceCode);
        setConfirmNewProduct2Code(coatPriceCode);
        setModalMessage("Product Splitted Successfully");
        setModalOpen(true);
    };

    // Function to handle reset
    const handleReset = () => {
        setOldProductCode("");
        setConOldProductCode("");
        setProduct1PriceCode("");
        setProduct2PriceCode("");
        setNewProduct1Code("");
        setConfirmNewProduct1Code("");
        setNewProduct2Code("");
        setConfirmNewProduct2Code("");
        setQuantity("1");
        setDetails("");
    };

    // Function to toggle display of splitted products
    const toggleSplittedProducts = () => {
        setShowSplittedProducts(!showSplittedProducts);
    };

    return (
        <div className="p-4">
            <div className="flex justify-center mb-4 bg-gray-700 p-3.5 rounded-lg">
                <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                    <div className="flex flex-col">
                        <h2 className="font-bold mb-8 text-white text-center text-2xl">
                            Break Up Products (Ready Made Only)
                        </h2>
                        {/* Input fields */}
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Old Product Code:</label>
                            <input
                                type="text"
                                placeholder="Enter old product code"
                                value={OldProductcode}
                                onChange={(e) => setOldProductCode(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Confirm Old Product Code:</label>
                            <input
                                type="text"
                                placeholder="Confirm old product code"
                                value={ConOldProductcode}
                                onChange={(e) => setConOldProductCode(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Quantity to be shifted:</label>
                            <input
                                type="number"
                                placeholder="Enter quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Product 1 Price Code:</label>
                            <input
                                type="text"
                                placeholder="Enter product 1 price code"
                                value={Product1PriceCode}
                                onChange={(e) => setProduct1PriceCode(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Product 2 Price Code:</label>
                            <input
                                type="text"
                                placeholder="Enter product 2 price code"
                                value={Product2PriceCode}
                                onChange={(e) => setProduct2PriceCode(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold mb-1 text-white">Details:</label>
                            <textarea
                                rows={3}
                                value={Details}
                                onChange={(e) => setDetails(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-lg"
                            ></textarea>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 p-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 hover:bg-green-700 px-10 text-white font-bold py-3 rounded-full text-base"
                            >
                                Submit
                            </button>
                            <button
                                onClick={handleReset}
                                className="bg-orange-500 hover:bg-orange-600 px-10 text-white font-semibold py-3 rounded-full text-base"
                            >
                                Reset
                            </button>
                        </div>
                        {/* View Splitted Products Button */}
                        <div className="mt-5 flex justify-center">
                            <button
                                onClick={toggleSplittedProducts}
                                className="bg-blue-500 hover:bg-blue-700 px-10 text-white font-semibold py-3 rounded-full text-base"
                            >
                                {showSplittedProducts ? "Hide Splitted Products" : "View Splitted Products"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Display the updated product codes */}
            {showSplittedProducts && (
                <div className="flex justify-center mt-8">
                    <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                        <div className="bg-gray-400 p-4 rounded-lg">
                            <p className="text-2xl font-bold mb-4 text-center">Splitted Products</p>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-gray-900 mb-1 text-lg">New Product 1 Code:</p>
                                    <p className="bg-white border border-gray-300 p-6 rounded">{NewProduct1Code}</p>
                                </div>
                                <div>
                                    <p className="text-gray-900 mb-1 text-lg">New Product 2 Code:</p>
                                    <p className="bg-white border border-gray-300 p-6 rounded">{NewProduct2Code}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal for displaying messages */}
            <Modal isOpen={modalOpen} message={modalMessage} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default BreakUpProduct;
