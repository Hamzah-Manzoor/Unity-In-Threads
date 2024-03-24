import React, { useState } from "react";

interface ProductSize {
    productName: string;
    size: string;
}

const UpdateProductRate = () => {
    // State variables for the input values
    const [productName, setProductName] = useState("");
    const [size, setSize] = useState("");
    const [productSizes, setProductSizes] = useState<ProductSize[]>([]);
    const [showTable, setShowTable] = useState(false); // State to track if sizes have been viewed

    // Function to handle submission
    const handleSubmit = () => {
        if (productName && size) {
            // Check if the entry already exists
            const entryExists = productSizes.some(entry => entry.productName === productName && entry.size === size);

            if (!entryExists) {
                // Add the new entry to the productSizes array
                setProductSizes([...productSizes, { productName, size }]);
                alert("Productsize added successfully");
            } else {
                alert("Entry already exists!"); // Display a message to the user
            }

            // Reset the input fields
            setProductName("");
            setSize("");
        }
    };

    // Function to handle reset
    const handleReset = () => {
        setProductName("");
        setSize("");
    };

    // Function to delete an entry from the table
    const handleDelete = (index: number) => {
        const updatedProductSizes = [...productSizes];
        updatedProductSizes.splice(index, 1);
        setProductSizes(updatedProductSizes);
    };

    // Define size options based on selected product
    const getSizeOptions = () => {
        switch (productName) {
            case "Sherwani":
            case "Prince Coat":
            case "Formal Waist Coat":
                return (
                    <input
                        type="number"
                        placeholder="Enter Size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        step="1"
                        className="w-full border border-gray-300 p-2"
                    />
                );
            case "Shalwar Suit":
            case "Kurta":
            default:
                return (
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full border border-gray-300 p-2"
                    >
                        <option value="" disabled>Select size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                    </select>
                );
        }
    };

    // Function to render the table rows
    const renderTableRows = () => {
        return productSizes.map((entry, index) => (
            <tr key={index}>
                <td className="border border-white border-solid px-4 py-2 text-white">{entry.productName}</td>
                <td className="border border-white border-solid px-4 py-2 text-white">{entry.size}</td>
                <td className="border border-white border-solid px-4 py-2">
                    <button
                        className="bg-red-500 text-white px-8 py-2 font-semibold p-2 rounded-full"
                        onClick={() => handleDelete(index)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <div className="p-12">
            <div className="flex justify-center mb-4 bg-gray-700 p-3.5">
                <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-1 text-white text-center text-5xl">
                            Add a Product Size
                        </h2>
                        {/* Input fields */}
                        <div className="mb-4">
                            <label className="text-white">Product Name:</label>
                            <select
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full border border-gray-300 p-2"
                            >
                                <option value="" disabled>Select product</option>
                                <option value="Sherwani">Sherwani</option>
                                <option value="Prince Coat">Prince Coat</option>
                                <option value="Shalwar Suit">Shalwar Suit</option>
                                <option value="Kurta">Kurta Trouser</option>
                                <option value="Formal Waist Coat">Waist Coat</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Product Size:</label>
                            {getSizeOptions()}
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
                            <button
                                className="bg-blue-500 text-white font-semibold p-3 rounded-full"
                                onClick={() => setShowTable(!showTable)}
                            >
                                View Sizes
                            </button>
                        </div>
                        {/* Table to display product sizes */}
                        {showTable && (
                            <div className="mt-4">
                                <table className="table-auto w-full bg-gray-900">
                                    <thead>
                                        <tr>
                                            <th className="border border-white border-solid px-4 py-2 text-white">Product Name</th>
                                            <th className="border border-white border-solid px-4 py-2 text-white">Size</th>
                                            <th className="border border-white border-solid px-4 py-2 text-white">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableRows()}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductRate;
