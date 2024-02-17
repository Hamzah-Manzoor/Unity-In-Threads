import axios from 'axios';
import { useState, useEffect } from 'react';

const UpdateBill = () => {

  const [billNumber, setBillNumber] = useState('');
  const [billData, setBillData] = useState<any>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [newPaymentMode, setNewPaymentMode] = useState('Cash');
  const [newPaymentDetails, setNewPaymentDetails] = useState('');

  const [changedRows, setChangedRows] = useState(new Set<number>());
  const [editableIndex, setEditableIndex] = useState<number | null>(null);

  const [editedPaymentMode, setEditedPaymentMode] = useState<string | null>(null);
  const [editedPaymentAmount, setEditedPaymentAmount] = useState<number | null>(null);

  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');

  // const fetchBill = () => {
  //   const foundBill = dummyBills.find(bill => bill.billNumber === billNumber);
  //   if (foundBill) {
  //     setBillData(foundBill);
  //   } else {
  //     alert('Bill not found. Please enter a valid bill number.');
  //   }
  // };

  const fetchBill = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getBill/' + billNumber);
      console.log('Response is: ' + response);
      if (!response.ok) {
        throw new Error('Bill not found. Please enter a valid bill number.');
      }
      const billDataFromServer = await response.json();
      setBillData(billDataFromServer);
    } catch (error: any) {
      alert(error.message);
    }
  };
  

  const dummyBills = [
    {
      billNumber: 111,
      discount: 30,
      name: 'Ali Hamid',
      contact: '03468356335',
      purchasingDetails: [
        {
          itemType: 'Ready Made',
          productCode: 'P001',
          productName: 'Product A',
          size: 'Large',
          orderNumber: '001',
          rate: 100,
          quantity: 2
          //total: 200
        },
        {
          itemType: 'Order Make',
          odbNumber: 'ODB001',
          productName: 'Product B',
          productCode: 'P002',
          size: 'Small',
          rate: 150,
          quantity: 1
          //total: 150
        }
      ],
      paymentDetails: [
        {
          //id: 1,
          paymentDate: '2024-01-30',
          amountPaid: 100,
          paymentMode: 'Credit Card'
          //billStatus: 'Pending'
        },
        {
          //id: 2,
          paymentDate: '2024-02-01',
          amountPaid: 60,
          paymentMode: 'Cash'
          //billStatus: 'Completed'
        }
      ]
    },

    {
      billNumber: 112,
      discount: 0,
      name: 'Hassan Mir',
      contact: '03532644661',
      purchasingDetails: [
        {
          itemType: 'Ready Made',
          productCode: 'P002',
          productName: 'Product C',
          size: 'Large',
          orderNumber: '001',
          rate: 200,
          quantity: 2
          //total: 400
        },
        {
          itemType: 'Order Make',
          odbNumber: 'ODB002',
          productName: 'Product D',
          productCode: 'P003',
          size: 'Small',
          rate: 250,
          quantity: 1
          //total: 250
        }
      ],
      paymentDetails: [
        {
          //id: 1,
          paymentDate: '2024-01-30',
          amountPaid: 400,
          paymentMode: 'Credit Card'
          //billStatus: 'Pending'
        },
        {
          //id: 2,
          paymentDate: '2024-02-01',
          amountPaid: 250,
          paymentMode: 'Cash'
          //billStatus: 'Completed'
        },
      ]
    },
  ];

  const calculateTotalAfterDiscount = () => {
    let total = calculateTotal();
    if (billData.discount > 0) {
      total -= billData.discount;
    }
    return total;
  };

  const isBillCompleted = () => {
    if (billData) {
      const totalAmountDue = calculateTotalAfterDiscount();
      const totalAmountPaid = calculateTotalAmountPaid();
      return totalAmountPaid === totalAmountDue;
    }
    return false;
  };



  const calculateTotalAmountPaid = () => {
    if (billData) {
      return billData.paymentDetails.reduce((total: number, payment: { amountPaid: number; }) => total + payment.amountPaid, 0);
    }
    return 0;
  };

  const addPayment = () => {
    const totalAmountDue = calculateTotalAfterDiscount();
    const totalAmountPaid = calculateTotalAmountPaid();

    if (!(totalAmountPaid + newPaymentAmount > totalAmountDue)) {
      if (!newPaymentAmount || isNaN(Number(newPaymentAmount))) {
        alert('Please enter a valid payment amount.');
        return;
      }

      //const billStatus = totalAmountPaid + newPaymentAmount === totalAmountDue ? 'Completed' : 'Pending';

      const newPayment = {
        paymentDate: new Date().toISOString().split('T')[0],
        amountPaid: Number(newPaymentAmount),
        paymentMode: newPaymentMode,
        paymentDetails: newPaymentDetails,
        //billStatus: billStatus
      };

      const updatedPaymentDetails = [...billData.paymentDetails, newPayment];

      const updatedBillData = {
        ...billData,
        paymentDetails: updatedPaymentDetails
        //billStatus: billStatus // Update bill status here
      };

      setBillData(updatedBillData);
      setNewPaymentAmount(0);
      setNewPaymentDetails('');
    } else {
      alert('Remaining amount due is: ' + (totalAmountDue - totalAmountPaid) + '. Please enter an amount less than or equal to the remaining amount due.');
    }
  };

  const handleSaveChanges = (index: number) => {
    const confirmation = window.confirm('Are you sure you want to save the changes?');
    if (confirmation) {

      if (editedPaymentAmount !== null && editedPaymentMode !== null) {
      
        const totalAmountDue = calculateTotalAfterDiscount();
        const totalAmountPaid = calculateTotalAmountPaid();
        const updatedTotalAmountPaid = totalAmountPaid - billData.paymentDetails[index].amountPaid + editedPaymentAmount;
  
        if (updatedTotalAmountPaid <= totalAmountDue) {
          const updatedPaymentDetails = billData.paymentDetails.map((payment: any, i: number) => {
            if (i === index) {
              return { ...payment, amountPaid: editedPaymentAmount, paymentMode: editedPaymentMode };
            }
            return payment;
          });
          const updatedBillData = { ...billData, paymentDetails: updatedPaymentDetails };
          setBillData(updatedBillData);
          setEditedPaymentAmount(null);
          setEditedPaymentMode(null);
          
        } else {
          alert('Total amount paid cannot exceed the total amount due.');
          setEditedPaymentAmount(null);
          setEditedPaymentMode(null);
        }
      } else if (editedPaymentAmount !== null) {
        
        const totalAmountDue = calculateTotalAfterDiscount();
        const totalAmountPaid = calculateTotalAmountPaid();
        const updatedTotalAmountPaid = totalAmountPaid - billData.paymentDetails[index].amountPaid + editedPaymentAmount;

        if (updatedTotalAmountPaid <= totalAmountDue) {
          const updatedPaymentDetails = billData.paymentDetails.map((payment: any, i: number) => {
            if (i === index) {
              return { ...payment, amountPaid: editedPaymentAmount };
            }
            return payment;
          });
          const updatedBillData = { ...billData, paymentDetails: updatedPaymentDetails };
          setBillData(updatedBillData);
          setEditedPaymentAmount(null);
        } else {
          alert('Total amount paid cannot exceed the total amount due.');
          setEditedPaymentAmount(null);
        }
      } else if (editedPaymentMode !== null) {
        const updatedPaymentDetails = billData.paymentDetails.map((payment: any, i: number) => {
          if (i === index) {
            return { ...payment, paymentMode: editedPaymentMode };
          }
          return payment;
        });
        const updatedBillData = { ...billData, paymentDetails: updatedPaymentDetails };
        setBillData(updatedBillData);
        setEditedPaymentMode(null);
      }

      setEditableIndex(null);
      const updatedChangedRows = new Set<number>(changedRows);
      updatedChangedRows.delete(index);
      setChangedRows(updatedChangedRows);
    }
  };

  const updateChangedRows = (index: number) => {
    const updatedSet = new Set<number>(changedRows);
    updatedSet.add(index);
    setChangedRows(updatedSet);
  };
  
  const handleChange = (index: number) => {
    // Call updateChangedRows to mark the row as changed
    updateChangedRows(index);
  };

  const handleDeletePayment = (index: number) => {
    const confirmation = window.confirm('Are you sure you want to delete this payment detail?');
    if (confirmation) {
      const updatedPaymentDetails = billData.paymentDetails.filter((payment: any, i: number) => i !== index && payment !== 0);
      const updatedBillData = { ...billData, paymentDetails: updatedPaymentDetails };
      setBillData(updatedBillData);
    }
  };

  const calculateBillStatus = (index: number) => {
    let totalAmountPaid = 0;
    for (let i = 0; i <= index; i++) {
      totalAmountPaid += billData.paymentDetails[i].amountPaid;
    }
    const totalAmountDue = calculateTotalAfterDiscount();//billData.purchasingDetails.reduce((total: number, item: any) => total + item.rate * item.quantity, 0);
    return totalAmountPaid === totalAmountDue ? 'Completed' : 'Pending';
  };

  const calculateTotal = () => {
    let total = 0;
    billData.purchasingDetails.forEach((item: { rate: number; quantity: number; }) => {
      total += item.rate * item.quantity;
    });
    return total;
  };

  const applyDiscount = () => {
    if (billData) {
      // Replace the discount in the billData state with the new discount value
      setBillData({
        ...billData,
        discount: discountAmount // Update the discount amount
      });
    }
  };

  const removeDiscount = () => {
    setDiscountAmount(0);
    if (billData) {
      // Make the discount in the billData zero
      setBillData({
        ...billData,
        discount: 0 // Set discount to zero
      });
    }
  };


  const saveCustomerInfo = () => {
    const confirmation = window.confirm('Are you sure you want to save the changes?');
    if (confirmation) {
      if (customerName && customerContact) {
        if (billData) {
          setBillData({
            ...billData,
            name: customerName,
            contact: customerContact
          });
        }
      } else if (customerName) {
        if (billData) {
          setBillData({
            ...billData,
            name: customerName
          });
        }
      } else {
        if (billData) {
          setBillData({
            ...billData,
            contact: customerContact
          });
        }
      }

      setCustomerName('');
      setCustomerContact('');
    }
  };


  const printBill = () => {
    // Generate bill content
    const billContent = `
      <div class="font-sans">

        <h1 style="text-align:center">Haroon's Designer</h1>
        <span style="font-size: 16px; text-align: center; margin-bottom: 4px; display: block;">Date: ${new Date().toLocaleDateString()}</span>

        <div style="display: flex; justify-content: space-between;">
          <div> <p>Bill Number: ${billData.billNumber}</p> </div>
          <div> <p>Salesman: John Doe</p> </div>
          <div> <p>Branch: XYZ Branch</p> </div>
          <div> <p>Contact: 123-456-7890</p> </div>
        </div>

        <hr style="margin-top: 1px; margin-bottom: 20px;" class="my-4" />

        <div style="display: flex; justify-content: space-between;">
          <span style="margin-bottom: 1px; margin-top: 1px;">Customer Name: ${billData.name}</span>
          <span style="margin-right: 1px; text-align: right;">Contact Number: ${billData.contact}</span>
        </div>

        <hr style="margin-top: 14px; margin-bottom: 20px;" class="my-4" />

        <h2 class="text-2xl font-bold">Purchasing Details</h2>

        <style>
          @media print {
            .table-heading {
              background-color: rgb(209 213 219) !important;
              -webkit-print-color-adjust: exact; /* For WebKit browsers */
              print-color-adjust: exact; /* For non-WebKit browsers */
            }
          }
        </style>

        <table style="width: 100%; text-align: center; border: 0px solid; border-color: rgb(31 41 55); border-collapse: collapse;">
          <thead>
            <tr style="background-color: rgb(209 213 219);" class="table-heading">
              <th class="border border-gray-800 py-2">Item Type</th>
              <th class="border border-gray-800 py-2">Product Code</th>
              <th class="border border-gray-800 py-2">Product Name</th>
              <th class="border border-gray-800 py-2">Size</th>
              <th class="border border-gray-800 py-2">Order#/ODB#</th>
              <th class="border border-gray-800 py-2">Rate</th>
              <th class="border border-gray-800 py-2">Quantity</th>
              <th class="border border-gray-800 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            ${billData.purchasingDetails.map((item: { itemType: any; productCode: any; productName: any; size: any; orderNumber: any; odbNumber: any; rate: number; quantity: number; }) => `
              <tr class="bg-gray-100">
                <td class="border border-gray-800 py-2">${item.itemType}</td>
                <td class="border border-gray-800 py-2">${item.productCode}</td>
                <td class="border border-gray-800 py-2">${item.productName}</td>
                <td class="border border-gray-800 py-2">${item.size}</td>
                <td class="border border-gray-800 py-2">${item.orderNumber || item.odbNumber}</td>
                <td class="border border-gray-800 py-2">${item.rate}</td>
                <td class="border border-gray-800 py-2">${item.quantity}</td>
                <td class="border border-gray-800 py-2">${item.rate * item.quantity}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Total Amount Due -->
        
        ${
          billData.discount > 0 ? `
            <div class="payable" style="padding-right: 11px; display: flex; flex-direction: column; justify-content: flex-end; text-align: right;">
              <span style="margin-top: 5px; margin-bottom: 1px; font-weight: bold;"> Total: ${calculateTotal()} </span>
              <span style="margin-bottom: 1px; font-weight: bold;"> Discount: ${billData.discount} </span>
              <span style="margin-bottom: 1px; font-weight: bold;"> Net Total: ${calculateTotal() - billData.discount} </span>
              <span style="margin-bottom: 1px; font-weight: bold;"> Payment: ${calculateTotalAmountPaid()} </span>
              <span style="font-weight: bold;"> Balance: ${calculateTotal() - (billData.discount + calculateTotalAmountPaid()) > 0 ? calculateTotal() - (billData.discount + calculateTotalAmountPaid()) : "NILL"} </span>
            </div>
          ` : `
            <div class="payable" style="padding-right: 11px; display: flex; flex-direction: column; justify-content: flex-end; text-align: right;">
              <span style="margin-bottom: 1px; font-weight: bold;"> Total: ${calculateTotal()} </span>
              <span style="margin-bottom: 1px; font-weight: bold;"> Payment: ${calculateTotalAmountPaid()} </span>
              <span style="font-weight: bold;"> Balance: ${calculateTotal() - calculateTotalAmountPaid()} </span>
            </div>
          `
        }

        <hr style="margin-top: 20px; margin-bottom: 20px;"  class="my-4" />

        <h2 class="text-2xl font-bold">Payment Details</h2>

        <table style="width: 100%; text-align: center; border: 0px solid; border-color: rgb(31 41 55); border-collapse: collapse;">
          <thead>
            <tr style="background-color: rgb(209 213 219);" class="table-heading">
              <th>Payment Date</th>
              <th>Amount Paid</th>
              <th class="border border-gray-800 py-2">Payment Mode</th>
              <th class="border border-gray-800 py-2">Bill Status</th>
            </tr>
          </thead>
          <tbody>
            ${billData.paymentDetails.map((payment: { paymentDate: any; amountPaid: any; paymentMode: any; billStatus: any; }, index: number) => `
              <tr class="bg-gray-100">
                <td class="border border-gray-800 py-2">${payment.paymentDate}</td>
                <td class="border border-gray-800 py-2">${payment.amountPaid}</td>
                <td class="border border-gray-800 py-2">${payment.paymentMode}</td>
                <td class="border border-gray-800 py-2">${calculateBillStatus(index)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <hr style="margin-top: 30px; margin-bottom: 7px;" class="my-4" />

        <span style="font-size: 17px; text-align: center; margin-bottom: 6px; font-weight: bold; display: block;">NO REFUND, NO EXCHANGE</span>

        <span style="font-size: 13px; text-align: center; margin-bottom: 1px; font-weight: bold; display: block;">https://www.haroonsdesigner.com/</span>
        <span style="font-size: 13px; text-align: center; margin-bottom: 3px; font-weight: bold; display: block;">https://www.facebook.com/HaroonsDesigner/</span>

        <span style="margin-bottom: 3px; font-weight: bold; display: block;">Our Stores:</span>
        <span style="font-size: 15px; margin-bottom: 1px; font-weight: bold; display: block;">6-Ground Floor, Pace (042-35759241)</span>
        <span style="font-size: 15px; margin-bottom: 1px; font-weight: bold; display: block;">15-Rawalpindi Block, Fortress Stadium (042-36672973)</span>
        <span style="font-size: 15px; margin-bottom: 1px; font-weight: bold; display: block;">22-1st Floor, Fortress Square Mall, Fortress Stadium (042-37341597)</span>

        <span style="margin-top: 12px; margin-bottom: 3px; font-weight: bold; display: block;">Policy Notes:</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; We will not be responsible for the clothes not received within 30 days.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; We will not be responsible for the size of clothes after washing.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; Due to energy crisis, no responsibility will be taken over us regarding delay in deliveries.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; However, our efforts will be towards the timely deliveries.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; 100% perfection is not guaranteed at first try of outfit.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; No Clothes will be delivered without Receipt.</span>
        <span style="font-size: 12px; margin-bottom: 1px; font-weight: bold; display: block;">&#10153; All Deliveries arrive after 10PM.</span>


      </div>
    `;

    // Create a new window with the bill content
    const printWindow = window.open('', '_blank')!;
    printWindow.document.open();
    printWindow.document.write(billContent);
    printWindow.document.close();

    // Print the bill
    printWindow.print();
  };
  
  
  return (
    <div className="pt-3 px-6">

      <div className="flex flex-col mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mb-8">
        <label htmlFor="billNumber" className="text-lg font-semibold mb-1 text-white">Enter Bill Number:</label>
        <input 
            type="number" 
            id="billNumber"
            placeholder="Bill Number"
            className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-4"
            value={billNumber} 
            onChange={(e) => setBillNumber(e.target.value)} 
        />
        <div className="flex justify-center">
          <button onClick={fetchBill} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-40 rounded-3xl">Fetch Bill</button>
          <button onClick={printBill} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 rounded-3xl mr-2">Print Bill</button>
        </div>
      </div>

      <hr className="border-white mb-4"/>

      {billData && (
        <>
        <div className="flex flex-col mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mb-8">
        <label htmlFor="customerName" className="text-lg font-semibold mb-1 text-white">Customer Name:</label>
        <input 
          type="text" 
          id="customerName"
          placeholder={billData.name}
          className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-1"
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)} 
        />
        <label htmlFor="customerContact" className="text-lg font-semibold mb-1 text-white">Customer Contact:</label>
        <input 
          type="text" 
          id="customerContact"
          placeholder={billData.contact}
          className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-4"
          value={customerContact} 
          onChange={(e) => setCustomerContact(e.target.value)} 
        />
        <button onClick={saveCustomerInfo} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Save Customer Info</button>
        </div>


        <div className="text-white">
          <p className="mt-3 mb-2 text-lg font-bold">Purchasing Details:</p>
          <table className="w-full text-center border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-500 bg-gray-700">Index</th>
                <th className="border border-slate-500 bg-gray-700">Item Type</th>
                <th className="border border-slate-500 bg-gray-700">Product Code</th>
                <th className="border border-slate-500 bg-gray-700">Product Name</th>
                <th className="border border-slate-500 bg-gray-700">Size</th>
                <th className="border border-slate-500 bg-gray-700">Order#/ODB#</th>
                <th className="border border-slate-500 bg-gray-700">Rate</th>
                <th className="border border-slate-500 bg-gray-700">Quantity</th>
                <th className="border border-slate-500 bg-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {billData.purchasingDetails.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="border border-slate-500">{index+1}</td>
                  <td className="border border-slate-500">{item.itemType}</td>
                  <td className="border border-slate-500">{item.productCode}</td>
                  <td className="border border-slate-500">{item.productName}</td>
                  <td className="border border-slate-500">{item.size}</td>
                  <td className="border border-slate-500">{item.orderNumber || item.odbNumber}</td>
                  <td className="border border-slate-500">{item.rate}</td>
                  <td className="border border-slate-500">{item.quantity}</td>
                  <td className="border border-slate-500">{item.rate*item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Amount Due */}
          <div className="mb-4 text-right">
            { billData.discount > 0 ? (
              <>
                <p className="mt-1">Total: {calculateTotal()}</p>
                <p className="mt-1">Discount: {billData.discount}</p>
                <p className="mt-1">Net Total: {calculateTotal() - billData.discount}</p>
                <p className="mt-0.5">Payment: {calculateTotalAmountPaid()}</p>
                <p className="mt-0.5">Balance: { (calculateTotal() - (billData.discount + calculateTotalAmountPaid())) > 0 ? (calculateTotal() - (billData.discount + calculateTotalAmountPaid())) : ("NILL")} </p>
              </>
            ):(
              <>
                <p className="mt-1">Total: {calculateTotal()}</p>
                <p className="mt-0.5">Payment: {calculateTotalAmountPaid()}</p>
                <p className="mt-0.5">Balance: {calculateTotal() - calculateTotalAmountPaid()}</p>
              </>
            )}
          </div>

          {/* Discount input */}
          <div className="flex flex-col mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mb-8 mt-5">
            <label htmlFor="discountAmount" className="text-lg font-semibold mb-1">Enter Discount Amount:</label>
            <div className="flex flex-col">
              <input 
                  type="number" 
                  id="discountAmount"
                  //placeholder={billData.discount.toString()}
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-4"
                  value={discountAmount === 0 ? (billData.discount) : (discountAmount)} 
                  onChange={(e) => {
                    if (editedPaymentAmount || editedPaymentMode) {
                      alert('Please save the row you have already changed.');
                    } else {
                      if ((calculateTotal() - (calculateTotalAmountPaid() + Number(e.target.value))) < 0) {
                        alert('Discount amount cannot be greater than the remaining amount due. Remaining amount due is: ' + (calculateTotal() - calculateTotalAmountPaid()));
                      } else {
                        setDiscountAmount(Number(e.target.value))
                      }
                    }
                  }} 
              />
              <div className='flex justify-between'>
                <button 
                  className={`w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1 ${discountAmount > 0 ? '' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={applyDiscount}
                  disabled={discountAmount <= 0}
                >
                  Apply Discount
                </button>
                <button 
                  className={`w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1 mt-0.5 ${billData.discount > 0 ? '' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={removeDiscount}
                  disabled={billData.discount === 0}
                >
                  Remove Discount
                </button>
              </div>
            </div>
          </div>

          <p className="mt-5 mb-2 text-lg font-bold">Payment Details:</p>
          <table className="w-full text-center border-collapse border border-slate-500 mb-5">
            <thead>
              <tr>
                <th className="border border-slate-500 bg-gray-700">Index</th>
                <th className="border border-slate-500 bg-gray-700">Payment Date</th>
                <th className="border border-slate-500 bg-gray-700">Amount Paid</th>
                <th className="border border-slate-500 bg-gray-700">Payment Mode</th>
                <th className="border border-slate-500 bg-gray-700">Bill Status</th>
                <th className="border border-slate-500 bg-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {billData.paymentDetails.map((payment: any, index: number) => (
                <tr key={index}>

                  <td className="border border-slate-500">{index+1}</td>

                  <td className="border border-slate-500">{payment.paymentDate}</td>

                  <td className="border border-slate-500">
                    {editableIndex === index ? (
                      <input 
                        type="number" 
                        value={editedPaymentAmount !== null ? editedPaymentAmount : payment.amountPaid} 
                        className="h-full w-full text-center outline-none bg-gray-800"
                        onChange={(e) => {
                          setEditedPaymentAmount(Number(e.target.value));
                          handleChange(index);
                        }}
                        onBlur={() => {
                          if (editedPaymentAmount || editedPaymentMode){
                            //Do Nothing
                          } else {
                            setEditableIndex(null)
                          } 
                        }}
                      />
                    ) : (
                      <span
                        onClick={() => {
                          if (editedPaymentAmount || editedPaymentMode) {
                            //console.log("Amount: " + editedPaymentAmount + " Mode: " + editedPaymentMode);
                            alert('Please save the row you have already changed.');
                          } else {
                            setEditableIndex(index);
                            //setEditedPaymentAmount(null);
                            //{editedPaymentAmount && editableIndex === index ? setEditedPaymentAmount(editedPaymentAmount) : setEditedPaymentAmount(payment.amountPaid) }
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        { editedPaymentAmount && editableIndex === index ? (editedPaymentAmount) : (payment.amountPaid) }
                      </span>
                    )}
                  </td>

                  <td className="border border-slate-500">
                    {editableIndex === index ? (
                      <select
                        value={editedPaymentMode !== null ? editedPaymentMode : payment.paymentMode}
                        onChange={(e) => {
                          setEditedPaymentMode(e.target.value);
                          handleChange(index);
                        }}
                        className="h-full w-full text-center outline-none bg-gray-800"
                        onBlur={() => {
                          if (editedPaymentAmount || editedPaymentMode){
                            //Do Nothing
                          } else {
                            setEditableIndex(null);
                          }
                        }}
                      >
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                      </select>
                      
                    ) : (
                      <span
                        onClick={() => {
                          if (editedPaymentAmount || editedPaymentMode) {
                            alert('Please save the row you have already changed.');
                          } else {
                            setEditableIndex(index);
                            //{ editedPaymentMode && editableIndex === index ? setEditedPaymentMode(editedPaymentMode):setEditedPaymentMode(payment.paymentMode)}
                            //setEditedPaymentMode(payment.paymentMode);
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {editedPaymentMode && editableIndex === index ? (editedPaymentMode) : (payment.paymentMode)}
                      </span>
                    )}
                  </td>

                  <td className="border border-slate-500">{calculateBillStatus(index)}</td>

                  <td className="border border-slate-500">
                    {changedRows.has(index) ? ( // Check if the row is edited or changed
                      <button onClick={() => handleSaveChanges(index)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Save</button>
                    ) : (
                      <button onClick={() => handleDeletePayment(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded">Delete</button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Payment section */}
          {!isBillCompleted() && (
            <div className="mb-4">
              <p className="text-lg font-bold mb-2">Add Payment:</p>
              <div className="flex flex-col text-black mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                <div className="flex flex-row w-full">
                  <input 
                    type="number" 
                    placeholder="Payment Amount"
                    className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-2 w-6/12 mr-0.5"
                    value={newPaymentAmount} 
                    onChange={(e) => {
                      if (editedPaymentAmount || editedPaymentMode) {
                        alert('Please save the row you have already changed.');
                      } else {
                        const value = Number(e.target.value);
                        if (value >= 0) {
                          setNewPaymentAmount(value);
                        }
                      }
                    }} 
                  />
                  <select 
                    value={newPaymentMode}
                    onChange={(e) => {
                      if (editedPaymentAmount || editedPaymentMode) {
                        alert('Please save the row you have already changed.');
                      } else {
                        setNewPaymentMode(e.target.value)
                      }
                    }}
                    className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-2 w-6/12 ml-0.5"
                  >
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                  </select>
                </div>
                <input 
                  type="text" 
                  placeholder="Payment Details"
                  className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-2 w-full"
                  value={newPaymentDetails} 
                  onChange={(e) => {
                    if (editedPaymentAmount || editedPaymentMode) {
                      alert('Please save the row you have already changed.');
                    } else {
                      setNewPaymentDetails(e.target.value)
                    }
                  }} 
                />
                <button onClick={addPayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">Add Payment</button>
              </div>
            </div>
          )}
        </div>
        </>
      )}
    </div>
  );
};

export default UpdateBill;
