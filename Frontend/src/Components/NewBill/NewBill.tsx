import React, { useState} from 'react';
import './NewBill.css';
import html2canvas from 'html2canvas';


interface ReadyMadeOrderItem {
    productCode: string;
    productName: string;
    productColor?: string;
    productPrice: number;
    quantity: number;
  }

interface OrderMakeItem {
  odbNumber?: number;
  productName: string;
  productCode: string;
  rate: number;
  quantity: number;
}

interface ReceiptPopupProps {
  readyMadeOrderList: ReadyMadeOrderItem[];
  orderMakeList: OrderMakeItem[];
  totalCost: number;
  branchName: string;
  closeReceipt: () => void;
  printReceipt: () => void;
  saveAsImage: () => void;
  // saveAsPDF: () => void;
  //showReceipt: boolean;
}

const ReceiptPopup: React.FC<ReceiptPopupProps> = ({
  readyMadeOrderList,
  orderMakeList,
  totalCost,
  branchName,
  closeReceipt,
  printReceipt,
  saveAsImage,
  //saveAsPDF,
  //showReceipt,
}) => {

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div id="receipt" className="bg-white p-8 rounded shadow-2xl max-h-full overflow-y-auto">

        <div className="text-center mb-4">
          {/* Added Padding on the heading to get some width on the invoice */}
          <p className="text-3xl font-bold px-10">Haroon's Designer</p>
          <p className="font-mono">Contact: +92 334 4701621</p>
          <p className="font-mono text-sm text-gray-600">{branchName}</p>
          <p className="font-mono text-sm text-gray-600">{formattedDate} at {formattedTime}</p>
          <p className="font-mono text-sm text-gray-600">Order Number: 52735</p>
        </div>

        <hr className="my-2 border-t border-gray-400" />


        <div className="mb-4">

          {/* Display Ready Made items */}
          {readyMadeOrderList.length > 0 && (
            <>
              <div className="text-center mt-4 mb-2">
                <p className="text-lg font-bold">Ready Made Items</p>
              </div>
              {readyMadeOrderList.map((item, index) => (
                <div key={index} className="flex mb-2">
                  <p className="basis-6/12">{`${item.productName} (${item.productColor})`}</p>
                  <p className="basis-3/12 text-center">{item.quantity}</p>
                  <p className="basis-3/12 text-right">{item.productPrice}</p>
                </div>
              ))}
            </>
          )}

          {/* <div className="flex mb-2 font-semibold">
            <p className="w-6/12">Product Name</p>
            <p className="w-3/12 text-center">Quantity</p>
            <p className="w-3/12 text-right">Price</p>
          </div>

          {orderList.map((item, index) => (
            <div key={index} className="flex mb-2">
              <p className="basis-6/12">{`${item.productName} (${item.productColor})`}</p>
              <p className="basis-3/12 text-center">{item.quantity}</p>
              <p className="basis-3/12 text-right">{item.productPrice}</p>
            </div>
          ))} */}

          {/* Display Order Make items */}
          {orderMakeList.length > 0 && (
            <>
              <div className="text-center mt-4 mb-2">
                <p className="text-lg font-bold">Order Make Items</p>
              </div>
              {orderMakeList.map((item, index) => (
                <div key={index} className="flex mb-2">
                  <p className="basis-6/12">{`${item.productName} (ODB#: ${item.odbNumber})`}</p>
                  <p className="basis-3/12 text-center">{item.quantity}</p>
                  <p className="basis-3/12 text-right">{item.rate}</p>
                </div>
              ))}
            </>
          )}

        </div>


        <hr className="my-4 border-t border-gray-400" />

        <div className="flex justify-between mb-2">
          <p>Total:</p>
          <p>{totalCost}</p>
        </div>

        <div className="flex justify-between mb-2">
          <p>Tax (17%):</p>
          <p>{(totalCost * 0.17).toFixed(2)}</p>
        </div>

        <div className="flex justify-between mb-2 font-bold">
          <p>Total (incl. Tax):</p>
          <p>{(totalCost * 1.17).toFixed(2)}</p>
        </div>

        <hr className="my-4 border-t border-gray-400" />

        <div className="text-center mb-4">
          {/* Added Padding on the heading to get some width on the invoice */}
          <p className="font-serif">THANK YOU!</p>
        </div>

        <div className="buttonsContainer hideBtnsInImage">

          <hr className="my-4 border-t border-gray-400" />

          <div className="flex justify-between mt-4">

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={printReceipt}
            >
              Print
            </button>

            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={saveAsImage}
            >
              Save as Image
            </button>

            {/* <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={saveAsPDF}
            >
              Save as PDF
            </button> */}

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={closeReceipt}
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};


enum ItemType {
  ReadyMade = 'Ready Made',
  OrderMake = 'Order Make',
}


const NewBill = () => {
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [odbNumber, setOdbNumber] = useState(0);
  const [readyMadeList, setReadyMadeList] = useState<ReadyMadeOrderItem[]>([]);
  const [branchName] = useState('Emporium Mall (1st Floor)');
  const [itemType, setItemType] = useState<ItemType>(ItemType.ReadyMade);
  const [orderMakeList, setOrderMakeList] = useState<OrderMakeItem[]>([]);
  const [billType, setBillType] = useState<'New Bill' | 'Resume Bill'>('New Bill');
  const [resumeBillNumber, setResumeBillNumber] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);

  const totalCost = readyMadeList.reduce((acc, item) => acc + (item.quantity * item.productPrice), 0) +
    orderMakeList.reduce((acc, item) => acc + (item.rate * item.quantity), 0);
  

  const readyMadeProducts = [
    { id: 1, name: 'Product A', code: 'P001', stock: 10, color: 'Blue', price: 3400 },
    { id: 2, name: 'Product B', code: 'P002', stock: 15, color: 'Red', price: 4450 },
    { id: 11, name: 'Product AA', code: 'P0011', stock: 10, color: 'Blue', price: 2200 },
    { id: 22, name: 'Product BB', code: 'P0022', stock: 15, color: 'Red', price: 850 },

    { id: 3, name: 'Product C', code: 'P003', stock: 12, color: 'Pink', price: 6040 },
    { id: 4, name: 'Product D', code: 'P004', stock: 16, color: 'Brown', price: 4530 },

    { id: 5, name: 'Product E', code: 'P005', stock: 23, color: 'Pink', price: 2570 },
    { id: 6, name: 'Product F', code: 'P006', stock: 7, color: 'Violet', price: 5260 },


    { id: 7, name: 'Product G', code: 'P007', stock: 18, color: 'Green', price: 5270 },
    { id: 8, name: 'Product H', code: 'P008', stock: 42, color: 'Black', price: 3260 },

    { id: 9, name: 'Product I', code: 'P009', stock: 19, color: 'Orange', price: 2600 },
    { id: 10, name: 'Product J', code: 'P010', stock: 22, color: 'Blue', price: 1200 },

    { id: 11, name: 'Product K', code: 'P011', stock: 13, color: 'Brown', price: 3500 },
    { id: 12, name: 'Product L', code: 'P012', stock: 25, color: 'Indingo', price: 5500 },


    { id: 13, name: 'Product M', code: 'P013', stock: 18, color: 'Green', price: 52860 },
    { id: 14, name: 'Product N', code: 'P014', stock: 42, color: 'Black' , price: 4370 },

    { id: 15, name: 'Product O', code: 'P015', stock: 19, color: 'Orange', price: 10500 },
    { id: 16, name: 'Product P', code: 'P016', stock: 22, color: 'Blue', price: 14600 },

    { id: 17, name: 'Product Q', code: 'P017', stock: 13, color: 'Brown', price: 15230 },
    { id: 18, name: 'Product R', code: 'P018', stock: 25, color: 'Indingo', price: 5700 },
  ];


  const orderMakeProducts = [
    { id: 1, name: 'Product A', odb: 111, code: 'P010', quantity: 2, price: 3400 },
    { id: 2, name: 'Product B', odb: 112, code: 'P015', quantity: 1, price: 4150 },
    { id: 3, name: 'Product C', odb: 113, code: 'P017', quantity: 3, price: 5750 },
    { id: 4, name: 'Product D', odb: 114, code: 'P018', quantity: 2, price: 6150 },
  ];

  const dummyBills = [
    {
      billNumber: '111',
      purchasingDetails: [
        {
          itemType: 'Ready Made',
          productCode: 'P001',
          productName: 'Product A',
          productColor: 'Blue',
          size: 'Large',
          orderNumber: '001',
          rate: 100,
          quantity: 2,
          total: 200
        },
        {
          itemType: 'Order Make',
          odbNumber: 122,
          productName: 'Product B',
          productCode: 'P002',
          size: 'Small',
          rate: 150,
          quantity: 1,
          total: 150
        }
      ],
      paymentDetails: [
        {
          paymentDate: '2024-01-30',
          amountPaid: 100,
          paymentMode: 'Credit Card',
          billStatus: 'Pending'
        },
        // {
        //   paymentDate: '2024-02-01',
        //   amountPaid: 250,
        //   paymentMode: 'Cash',
        //   billStatus: 'Completed'
        // }
      ]
    },

    {
      billNumber: '112',
      purchasingDetails: [
        {
          itemType: 'Ready Made',
          productCode: 'P002',
          productName: 'Product C',
          productColor: 'Black',
          size: 'Large',
          orderNumber: '001',
          rate: 200,
          quantity: 2,
          total: 400
        },
        {
          itemType: 'Order Make',
          odbNumber: 121,
          productName: 'Product D',
          productCode: 'P003',
          size: 'Small',
          rate: 250,
          quantity: 1,
          total: 250
        }
      ],
      paymentDetails: [
        {
          paymentDate: '2024-01-30',
          amountPaid: 400,
          paymentMode: 'Credit Card',
          billStatus: 'Pending'
        },
        {
          paymentDate: '2024-02-01',
          amountPaid: 250,
          paymentMode: 'Cash',
          billStatus: 'Completed'
        },
      ]
    },
  ];

  const handleAddItem = () => {

    if (itemType === ItemType.ReadyMade) {

      if (productCode && quantity > 0) {
        // Find the product from the initialProducts array based on the provided product code
        const product = readyMadeProducts.find((item) => item.code === productCode);
    
        if (product) {
          const existingItem = readyMadeList.find((item) => item.productCode === product.code);
    
          if (existingItem) {
            // Update the quantity of the existing item
            const updatedOrderList = readyMadeList.map((item) => {
              if (item.productCode === existingItem.productCode) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                  productPrice: item.productPrice + product.price * quantity,
                };
              }
              return item;
            });
            setReadyMadeList(updatedOrderList);
          } else {
            const newItem: ReadyMadeOrderItem = {
              productCode: product.code,
              productName: product.name,
              productColor: product.color,
              productPrice: product.price,
              quantity,
            };
            setReadyMadeList([...readyMadeList, newItem]);
          }
    
          // Reset input fields after adding/updating the item
          setProductCode('');
          setQuantity(0);
        } else {
          alert('Product not found with the provided code.');
        }
      } else {
        alert('Please enter a valid product code and quantity.');
      }

    } else if (itemType === ItemType.OrderMake) {
      // Find the product from the initialProducts array based on the provided product code
      const product = orderMakeProducts.find((item) => item.odb === odbNumber);

      if (product) {
        const newItem: OrderMakeItem = {
          odbNumber: product.odb,
          productName: product.name,
          productCode: product.code,
          rate: product.price,
          quantity: product.quantity,
        };
        setOrderMakeList([...orderMakeList, newItem]);
      } else {
        alert('Product not found with the provided code.');
      }

      setOdbNumber(0);
    }


  };
  

  const handleDeleteReadyMadeItem = (index: number) => {
    const updatedList = [...readyMadeList];
    updatedList.splice(index, 1);
    setReadyMadeList(updatedList);
  };

  const handleDeleteOrderMakeItem = (index: number) => {
    const updatedList = [...orderMakeList];
    updatedList.splice(index, 1);
    setOrderMakeList(updatedList);
  };
  

  const handleGenerateInvoice = () => {
    if (readyMadeList.length > 0 || orderMakeList.length > 0) {
      setShowReceipt(true);
    } else {
      alert('Please add items to generate a receipt.');
    }
  };

  const handleCloseReceipt = () => {
    setShowReceipt(false);
  };

  const handlePrintReceipt = () => {
    // Functionality to print the receipt
    window.print();
  };

  const handleSaveAsImage = () => {
    const receiptElement = document.getElementById('receipt');
    const lineContainer = document.querySelector('.buttonsContainer') as HTMLElement;
    const buttonsContainer = document.querySelector('.hideBtnsInImage') as HTMLElement;
    
  
    if (receiptElement && buttonsContainer) {
      lineContainer.classList.add('hiddenForCapture');
      buttonsContainer.classList.add('hiddenForCapture');
  
      // Wait for a short delay to ensure the class is added before capturing the image
      //setTimeout(() => {
        html2canvas(receiptElement, {
          ignoreElements: (element) => element.classList.contains('hiddenForCapture')
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.download = 'receipt.png';
          link.href = imgData;
          link.click();
  
          // Remove the class after generating the image
          lineContainer.classList.remove('hiddenForCapture');
          buttonsContainer.classList.remove('hiddenForCapture');
        });
      //}, 100); // Adjust the delay as needed
    }
  };

  // const handleSaveAsPDF = () => {
  //   // Functionality to save the receipt as a PDF
  //   // Implement saving the receipt as a PDF here
  // };

  const handleResumeBill = () => {
    if (billType === 'Resume Bill' && resumeBillNumber) {
      // Find the bill in the dummyBills array based on the entered bill number
      const selectedBill = dummyBills.find((bill) => bill.billNumber === resumeBillNumber);

      if (selectedBill) {
        // Extract and set Ready Made items from the selected bill
        const readyMadeItems = selectedBill.purchasingDetails
          .filter((item) => item.itemType === 'Ready Made')
          .map((item) => ({
            productCode: item.productCode,
            productName: item.productName,
            productColor: item.productColor,
            productPrice: item.rate,
            quantity: item.quantity,
          }));
        //console.log("Ready Made Items:", readyMadeItems);
        setReadyMadeList(readyMadeItems);

        // Extract and set Order Make items from the selected bill
        const orderMakeItems = selectedBill.purchasingDetails
          .filter((item) => item.itemType === 'Order Make')
          .map((item) => ({
            odbNumber: item.odbNumber,
            productName: item.productName,
            productCode: item.productCode,
            rate: item.rate,
            quantity: item.quantity,
          }));
        setOrderMakeList(orderMakeItems);

        // Reset other input fields and options
        setProductCode('');
        setQuantity(0);
        setOdbNumber(0);
        setItemType(ItemType.ReadyMade);
        setBillType('New Bill');
        setResumeBillNumber('');
        setShowReceipt(false);
      } else {
        alert('Bill not found with the provided number.');
      }
    }
  };

  return (
    <div className="p-4">

      <div className="flex justify-center mb-4 bg-gray-700 p-3.5">

        <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">

          <div className="flex flex-col ">

          <label htmlFor="billType" className="text-lg font-semibold mb-1 text-white">
              Bill Type
            </label>
            <select
              value={billType}
              onChange={(e) => setBillType(e.target.value as 'New Bill' | 'Resume Bill')}
              className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
            >
              <option value="New Bill">New Bill</option>
              <option value="Resume Bill">Resume Bill</option>
            </select>
            {billType === 'Resume Bill' && (
              <>
                <label htmlFor="resumeBillNumber" className="text-lg font-semibold mb-1 text-white">
                  Enter Bill Number
                </label>
                <input
                  type="text"
                  placeholder="Bill Number"
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
                  value={resumeBillNumber}
                  onChange={(e) => setResumeBillNumber(e.target.value)}
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={handleResumeBill}
                >
                  Get Bill
                </button>
              </>
            )}

            <label htmlFor="itemType" className="text-lg font-semibold mb-1 text-white">
              Item Type
            </label>
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value as ItemType)}
              className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
            >
              <option value={ItemType.ReadyMade}>Ready Made</option>
              <option value={ItemType.OrderMake}>Order Make</option>
            </select>

            {itemType === ItemType.ReadyMade && (
              <>
                <label htmlFor="productCode" className="text-lg font-semibold mb-1 text-white">
                  Product Code
                </label>
                <input
                  type="text"
                  placeholder="Product Code"
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                />

                <label htmlFor="quantity" className="text-lg font-semibold mb-1 text-white">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </>
            )}

            {itemType === ItemType.OrderMake && (
              <>
                <label htmlFor="odbNumber" className="text-lg font-semibold mb-1 text-white">
                  ODB#
                </label>
                <input
                  type="number"
                  placeholder="ODB#"
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300"
                  value={odbNumber}
                  onChange={(e) => setOdbNumber(parseInt(e.target.value))}
                />
              </>
            )}

          </div>

          <div className="flex mt-5 justify-center">

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleAddItem}
            >
              Add Item
            </button>

            <button
              className={`${
                readyMadeList.length === 0 && orderMakeList.length === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
              } text-white font-bold py-2 px-4 rounded`}
              onClick={handleGenerateInvoice}
              disabled={readyMadeList.length === 0 && orderMakeList.length === 0}
            >
              Generate Bill
            </button>

          </div>

        </div>

      </div>

      <hr className="border-white mb-4"/>

      <div>

        {readyMadeList.length === 0 && orderMakeList.length === 0 ? (
          <p className="text-center text-gray-500">Please Add Items to Generate a Bill.</p>
        ) : (
          <>

            {readyMadeList.length > 0 && (
              <>
                <div className="text-center mt-4 mb-2">
                  <p className="text-lg font-bold text-white">Ready Made Items</p>
                </div>
                {readyMadeList.map((item, index) => (
                    <div key={index} className="flex items-center border-b border-gray-300 py-2 text-white">
                      <p className="flex-1">{item.productCode}</p>
                      <p className="flex-1">{item.productName}</p>
                      <p className="flex-1">{item.productColor}</p>
                      <p className="flex-1">x{item.quantity}</p>
                      <p className="flex-1">Rs. {item.productPrice}</p>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleDeleteReadyMadeItem(index)}
                      >
                        Delete
                      </button>
                    </div>
                ))}
              </>
            )}

            
            {/* Display Order Make items */}
            {orderMakeList.length > 0 && (
              <>
                <div className="text-center mt-4 mb-2">
                  <p className="text-lg font-bold text-white">Order Make Items</p>
                </div>
                {orderMakeList.map((item, index) => (
                  <div key={index} className="flex items-center border-b border-gray-300 py-2 text-white">
                    <p className="flex-1">{`ODB#: ${item.odbNumber}`}</p>
                    <p className="flex-1">{item.productCode}</p>
                    <p className="flex-1">{item.productName}</p>
                    <p className="flex-1">{`x${item.quantity}`}</p>
                    <p className="flex-1">{`Rs. ${item.rate}`}</p>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDeleteOrderMakeItem(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </>
            )}
          </>


        )}

      </div>

      {/* {readyMadeList.length > 0 && (
        <div className="flex justify-end mt-4 text-white">
          <p className="font-bold mr-2">Total Cost: Rs. {totalCost}</p>
        </div>
      )} */}

      { (readyMadeList.length > 0 || orderMakeList.length > 0) && (
        <div className="flex justify-end mt-4 text-white">
          <p className="font-bold mr-2">Total Cost: Rs. {totalCost}</p>
        </div>
      )}

      {showReceipt && (
        <ReceiptPopup
        readyMadeOrderList={readyMadeList}
        orderMakeList={orderMakeList}
        totalCost={totalCost}
        branchName={branchName}
        closeReceipt={handleCloseReceipt}
        printReceipt={handlePrintReceipt}
        saveAsImage={handleSaveAsImage}
        // saveAsPDF={handleSaveAsPDF}
        // showReceipt={showReceipt}
        />
      )}
    </div>
  );
};

export default NewBill;
