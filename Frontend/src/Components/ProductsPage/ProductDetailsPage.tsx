import React, { useRef, useState, useEffect } from 'react';
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
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductDetails | undefined>(undefined);

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
      //image: 'https://amiradnan.com/cdn/shop/products/FG-0001880-0644201-Silver-5.jpg?v=1664260476',
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

  // Fetch product details when productId changes
  useEffect(() => {
    if (productId) {
      const selectedProduct = mockProductDetails.find((product) => product.id === parseInt(productId, 10));
      setCurrentProduct(selectedProduct);
    }
  }, [productId]);

  const handleDeleteProduct = () => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');

    if (confirmation) {
      // Proceed with the deletion logic here
      // For instance, you might trigger an API call to delete the product
      console.log('Product deletion confirmed!');
      // Add logic to delete the product from the data source or display a message
    } else {
      console.log('Product deletion cancelled.');
      // Optionally, you can handle the cancellation action
    }
  };

  const handleAttachMedia = () => {
    // Click the hidden file input to trigger file selection
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpdateProduct = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  // Update the state of the product attribute
  const handleAttributeChange = (attribute: keyof ProductDetails, value: string | number) => {
    if (currentProduct) {
      setCurrentProduct((prevProduct) => {
        if (prevProduct) {
          return { ...prevProduct, [attribute]: value } as ProductDetails;
        }
        return prevProduct;
      });
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
        <div className="bg-gray-200 sm:mx-0.5 md:mx-2 lg:mx-7 xl:mx-28 2xl:mx-40 flex flex-col justify-center sm:flex-row">

          <div className="basis-2/3 px-3.5 py-3.5 sm:px-5 flex flex-col justify-between">
            <div>
              <p className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">{selectedProduct.name}</p>
              <div className="pt-8">
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Product Code: {selectedProduct.code}</p>
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Available Stock: {selectedProduct.stock}</p>
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Color: {selectedProduct.color}</p>
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Type: {selectedProduct.type}</p>
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Category: {selectedProduct.category}</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-20">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-3xl mb-2 w-1/2 xl:w-3/4" onClick={handleUpdateProduct}>
                Update Product
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-3xl mb-2 w-1/2 xl:w-3/4"
                onClick={() => handleDeleteProduct()}
              >
              Delete Product
            </button>
            </div>
            {/* Add more details here */}
          </div>

          <div className="basis-1/3">

            {/* Adjusted container size */}
            <div className="bg-indigo-300 rounded-md">
              {/* Adjusted image styling */}
              <img
                className="object-cover hover:object-none"
                src={selectedProduct.image}
                alt="Product"
              />
            </div>

            <div className="flex items-center mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-3xl flex mx-auto w-3/4 lg:w-1/2 flex justify-center items-center"
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


          {/* Modal for update product */}
          {isUpdateModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-700 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <p className="text-xl mb-4">Hi, Welcome to the Update Product's Page</p>

                {/* <div className="flex flex-col mb-4">
                  <label htmlFor="productName" className="mb-2 text-lg font-semibold">Product Name</label>
                  <input type="text" id="productName" className="border border-gray-400 rounded px-3 py-2" value={currentProduct?.name || ''} readOnly />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="productCode" className="mb-2 text-lg font-semibold">Product Code</label>
                  <input type="text" id="productCode" className="border border-gray-400 rounded px-3 py-2" value={currentProduct?.code || ''} readOnly />
                </div> */}

                <div className="flex flex-col mb-4">
                  <label htmlFor="productStock" className="mb-2 text-lg font-semibold">Stock</label>
                  <input
                    type="number"
                    id="productStock"
                    className="border border-gray-400 rounded px-3 py-2"
                    value={currentProduct?.stock || ''}
                    onChange={(e) => handleAttributeChange('stock', parseInt(e.target.value))}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="productColor" className="mb-2 text-lg font-semibold">Color</label>
                  <input
                    type="text"
                    id="productColor"
                    className="border border-gray-400 rounded px-3 py-2"
                    placeholder={currentProduct?.color || ''} // Set pre-filled value as placeholder
                    value={currentProduct?.color || ''}
                    onChange={(e) => handleAttributeChange('color', e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="productType" className="mb-2 text-lg font-semibold">Type</label>
                  <input
                    type="text"
                    id="productType"
                    className="border border-gray-400 rounded px-3 py-2"
                    placeholder={currentProduct?.type || ''}
                    value={currentProduct?.type || ''}
                    onChange={(e) => handleAttributeChange('type', e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="productCategory" className="mb-2 text-lg font-semibold">Category</label>
                  <input
                    type="text"
                    id="productCategory"
                    className="border border-gray-400 rounded px-3 py-2"
                    placeholder={currentProduct?.category || ''}
                    value={currentProduct?.category || ''}
                    onChange={(e) => handleAttributeChange('category', e.target.value)}
                  />
                </div>


                <div className="flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl mr-4" onClick={handleCloseUpdateModal}>
                    Update
                  </button>
                  <button className="bg-white border border-gray-500 hover:bg-gray-200 font-bold py-3 px-6 rounded-3xl" onClick={handleCloseUpdateModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}



        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;