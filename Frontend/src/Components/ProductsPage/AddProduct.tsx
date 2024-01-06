import React, { useRef, useState } from 'react';
import { MdAttachFile } from 'react-icons/md';

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
          <label htmlFor="productName" className="text-lg font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="border border-gray-400 rounded px-3 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productCode" className="text-lg font-semibold mb-1">
            Product Code
          </label>
          <input
            type="text"
            id="productCode"
            className="border border-gray-400 rounded px-3 py-2"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productStock" className="text-lg font-semibold mb-1">
            Stock
          </label>
          <input
            type="number"
            id="productStock"
            className="border border-gray-400 rounded px-3 py-2"
            value={productStock}
            onChange={(e) => setProductStock(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productColor" className="text-lg font-semibold mb-1">
            Color
          </label>
          <input
            type="text"
            id="productColor"
            className="border border-gray-400 rounded px-3 py-2"
            value={productColor}
            onChange={(e) => setProductColor(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productType" className="text-lg font-semibold mb-1">
            Type
          </label>
          <input
            type="text"
            id="productType"
            className="border border-gray-400 rounded px-3 py-2"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productCategory" className="text-lg font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            id="productCategory"
            className="border border-gray-400 rounded px-3 py-2"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productImage" className="text-lg font-semibold mb-1">
            Product Image
          </label>
          <div className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center"
              onClick={handleAttachMedia}
            >
              <MdAttachFile className="mr-2 h-5 w-5" />
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
            <img src={productImage} alt="Product" className="mt-3 object-cover h-48 w-48" />
          )}
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-3xl">
          Create Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;