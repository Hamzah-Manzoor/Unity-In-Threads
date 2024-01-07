import React, { useState } from 'react';

interface OrderItem {
    productCode: string;
    productName: string;
    productColor: string;
    quantity: number;
  }

const RecordRetailOrder = () => {
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [orderList, setOrderList] = useState<OrderItem[]>([]);

  const initialProducts = [
    { id: 1, name: 'Product A', code: 'P001', stock: 10, color: 'Blue', price: '3400' },
    { id: 2, name: 'Product B', code: 'P002', stock: 15, color: 'Red', price: '4450' },
    { id: 11, name: 'Product AA', code: 'P0011', stock: 10, color: 'Blue', price: '2200' },
    { id: 22, name: 'Product BB', code: 'P0022', stock: 15, color: 'Red', price: '850' },

    { id: 3, name: 'Product C', code: 'P003', stock: 12, color: 'Pink', price: '6040' },
    { id: 4, name: 'Product D', code: 'P004', stock: 16, color: 'Brown', price: '4530' },

    { id: 5, name: 'Product E', code: 'P005', stock: 23, color: 'Pink', price: '2570' },
    { id: 6, name: 'Product F', code: 'P006', stock: 7, color: 'Violet', price: '5260' },


    { id: 7, name: 'Product G', code: 'P007', stock: 18, color: 'Green', price: '5270' },
    { id: 8, name: 'Product H', code: 'P008', stock: 42, color: 'Black', price: '3260' },

    { id: 9, name: 'Product I', code: 'P009', stock: 19, color: 'Orange', price: '2600' },
    { id: 10, name: 'Product J', code: 'P0010', stock: 22, color: 'Blue', price: '1200' },

    { id: 11, name: 'Product K', code: 'P0011', stock: 13, color: 'Brown', price: '3500' },
    { id: 12, name: 'Product L', code: 'P0012', stock: 25, color: 'Indingo', price: '5500' },


    { id: 13, name: 'Product M', code: 'P0013', stock: 18, color: 'Green', price: '52860' },
    { id: 14, name: 'Product N', code: 'P0014', stock: 42, color: 'Black' , price: '4370' },

    { id: 15, name: 'Product O', code: 'P0015', stock: 19, color: 'Orange', price: '10500' },
    { id: 16, name: 'Product P', code: 'P0016', stock: 22, color: 'Blue', price: '14600' },

    { id: 17, name: 'Product Q', code: 'P0017', stock: 13, color: 'Brown', price: '15230' },
    { id: 18, name: 'Product R', code: 'P0018', stock: 25, color: 'Indingo', price: '5700' },
  ];

  const handleAddItem = () => {
    if (productCode && quantity > 0) {
      // Find the product from the initialProducts array based on the provided product code
      const product = initialProducts.find((item) => item.code === productCode);

      if (product) {
        const newItem: OrderItem = {
          productCode: product.code,
          productName: product.name,
          productColor: product.color,
          quantity,
        };

        // Add the new item to the order list
        setOrderList([...orderList, newItem]);

        // Reset input fields after adding the item
        setProductCode('');
        setQuantity(0);
      } else {
        alert('Product not found with the provided code.');
      }
    } else {
      alert('Please enter a valid product code and quantity.');
    }
  };

  const handleDeleteItem = (index: number) => {
    const updatedList = [...orderList];
    updatedList.splice(index, 1);
    setOrderList(updatedList);
  };

  const handleGenerateInvoice = () => {
    // Implement the logic to generate the invoice here
    console.log('Invoice generated:', orderList);
    // Reset the order list after generating the invoice
    setOrderList([]);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col mb-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Product Code"
            className="border border-gray-400 rounded-l px-3 py-2 flex-1"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border border-gray-400 rounded-r px-3 py-2 flex-1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <div className="flex mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleAddItem}
          >
            Add Item
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleGenerateInvoice}
          >
            Generate Invoice
          </button>
        </div>
      </div>

      <hr className="border-black mb-4" />

      <div>
        {orderList.map((item, index) => (
          <div key={index} className="flex items-center border-b border-gray-300 py-2">
            <p className="flex-1">{item.productCode}</p>
            <p className="flex-1">{item.productName}</p>
            <p className="flex-1">{item.productColor}</p>
            <p className="flex-1">x{item.quantity}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordRetailOrder;
