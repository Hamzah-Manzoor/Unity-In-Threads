import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MdAttachFile } from "react-icons/md";

interface ProductDetails {
  id: number;
  name: string;
  code: string;
  stock: number;
  color: string;
  type: string;
  category: string;
  image: string;
  // Add more fields if needed
}

const ProductDetailsPage: React.FC = () => {
  const { productId }: { productId?: string } = useParams(); // Make productId optional

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock product details (Replace this with your actual data)
  const mockProductDetails: ProductDetails[] = [
    {
      id: 1,
      name: 'Product A',
      code: 'P001',
      stock: 10,
      color: 'Blue',
      type: 'Sherwani',
      category: "Groom's Section",
      image: 'https://uycollection.com/cdn/shop/products/EmbroideredPakistaniGroomSherwaniDressforWedding_1800x1800_32036069-ba94-487c-8c8c-d2642dcb9ae3.webp?v=1672990287',
    },
    {
      id: 2,
      name: 'Product B',
      code: 'P002',
      stock: 12,
      color: 'Blue',
      type: 'Sherwani',
      category: "Groom's Section",
      image: 'https://amiradnan.com/cdn/shop/products/FG-0001880-0644201-Silver-5.jpg?v=1664260476',
    },
    // Add more mock product details here if needed
  ];

  const handleAttachMedia = () => {
    // Click the hidden file input to trigger file selection
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Find the product with the given productId (Parse the productId to a number)
  const selectedProduct: ProductDetails | undefined = productId
    ? mockProductDetails.find((product) => product.id === parseInt(productId, 10))
    : undefined;

  // Render the details of the selected product if found, else show a message
  return (
    <div className="p-4">
      {/* <h2>Product Details</h2> */}
      {selectedProduct ? (
        <div className="bg-gray-300 sm:mx-0.5 md:mx-2 lg:mx-7 xl:mx-28 2xl:mx-40 flex justify-center">
          
          <div className="basis-1/3">

            <div className="bg-indigo-300 rounded-md overflow-hidden">
              <img className="object-cover w-72 h-92" src={selectedProduct.image} alt="Product" />
            </div>

            <div className="flex items-center mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl flex"
                onClick={handleAttachMedia}
              >
                <MdAttachFile className="mr-2 h-5 w-5" />
                Attach Media
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
                  }
                }}
              />
            </div>

          </div>

          <div className="basis-2/3 px-2 sm:px-5">
            <p className="text-4xl font-bold">{selectedProduct.name}</p>
            <p>Product Code: {selectedProduct.code}</p>
            <p>Available Stock: {selectedProduct.stock}</p>
            <p>Color: {selectedProduct.color}</p>
            <p>Type: {selectedProduct.type}</p>
            <p>Category: {selectedProduct.category}</p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                Update
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
            {/* Add more details here */}
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
