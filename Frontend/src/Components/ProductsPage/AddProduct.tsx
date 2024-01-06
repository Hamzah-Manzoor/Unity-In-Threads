import React, { useRef, useState } from 'react';
import { MdAttachFile } from 'react-icons/md';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS


const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productStock, setProductStock] = useState(0);
  const [productColor, setProductColor] = useState('');
  const [productType, setProductType] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachMedia = () => {
    // Click the hidden file input to trigger file selection
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="p-4">
      <h2>Add Product</h2>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="productName" className="mb-1 text-lg font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productCode" className="mb-1 text-lg font-semibold">
            Product Code
          </label>
          <input
            type="text"
            id="productCode"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productStock" className="mb-1 text-lg font-semibold">
            Stock
          </label>
          <input
            type="number"
            id="productStock"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productStock}
            onChange={(e) => setProductStock(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productColor" className="mb-1 text-lg font-semibold">
            Color
          </label>
          <input
            type="text"
            id="productColor"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productColor}
            onChange={(e) => setProductColor(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productType" className="mb-1 text-lg font-semibold">
            Type
          </label>
          <input
            type="text"
            id="productType"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productCategory" className="mb-1 text-lg font-semibold">
            Category
          </label>
          <input
            type="text"
            id="productCategory"
            className="px-3 py-2 border border-gray-400 rounded"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productImage" className="mb-1 text-lg font-semibold">
            Product Image
          </label>
          <div className="flex items-center">
            <button
              className="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-3xl"
              onClick={handleAttachMedia}
            >
              <MdAttachFile className="w-5 h-5 mr-2" />
              Attach Image
            </button>
            {/* Hidden file input */}
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                // Handle the file selection logic here
                const selectedFile = e.target.files && e.target.files[0];
                if (selectedFile) {
                  // Do something with the selected file (e.g., upload)
                  console.log('Selected file:', selectedFile);
                  // Set the image state to display in the component
                  setProductImage(URL.createObjectURL(selectedFile));
                }
              }}
            />
          </div>
          {productImage && (
            <img src={productImage} alt="Product" className="object-cover w-48 h-48 mt-3" />
          )}
        </div>

        <button className="px-6 py-3 font-bold text-white bg-green-500 hover:bg-green-700 rounded-3xl">
          Create Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;