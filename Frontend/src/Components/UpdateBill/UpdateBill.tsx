import { useState } from 'react';

const UpdateBill = () => {
  // State to store the entered bill number
  const [billNumber, setBillNumber] = useState('');
  // State to store the fetched bill data
  const [billData, setBillData] = useState<any>(null);
  // State for new payment data
  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [newPaymentMode, setNewPaymentMode] = useState('Cash');
  const [newPaymentDetails, setNewPaymentDetails] = useState('');


  const fetchBill = () => {
    // Check if the entered bill number matches any of the dummy bill data
    const foundBill = dummyBills.find(bill => bill.billNumber === billNumber);

    if (foundBill) {
      // // Calculate total amount due
      // const totalAmountDue = foundBill.purchasingDetails.reduce((total, item) => total + (item.rate * item.quantity), 0);
  
      // // Calculate total amount paid
      // const totalAmountPaid = foundBill.paymentDetails.reduce((total, payment) => total + payment.amountPaid, 0);
  
      // // Check if the bill status is "Completed" and the total amount paid equals the total amount due
      // const isBillCompleted = foundBill.paymentDetails[foundBill.paymentDetails.length - 1].billStatus === 'Completed'
      //                         && totalAmountPaid === totalAmountDue;
  

      setBillData(foundBill);

    } else {
      // If no matching bill found, show relevant alert
      alert('Bill not found. Please enter a valid bill number.');
    }
  };

  // Additional dummy bill data
  const dummyBills = [
    {
      billNumber: '111',
      purchasingDetails: [
        {
          itemType: 'Ready Made',
          productCode: 'P001',
          productName: 'Product A',
          size: 'Large',
          orderNumber: '001',
          rate: 100,
          quantity: 2,
          total: 200
        },
        {
          itemType: 'Order Make',
          odbNumber: 'ODB001',
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
          size: 'Large',
          orderNumber: '001',
          rate: 200,
          quantity: 2,
          total: 400
        },
        {
          itemType: 'Order Make',
          odbNumber: 'ODB002',
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

  const isBillCompleted = () => {
    if (billData) {
      const totalAmountDue = billData.purchasingDetails.reduce((total: number, item: { rate: number; quantity: number; }) => total + (item.rate * item.quantity), 0);
      const totalAmountPaid = billData.paymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);
      return totalAmountPaid === totalAmountDue;
    }
    return false;
  };

  const addPayment = () => {

    const totalAmountDue = billData.purchasingDetails.reduce((total: number, item: { rate: number; quantity: number; }) => total + (item.rate * item.quantity), 0);
    //const totalAmountPaid = updatedPaymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);
    const totalAmountPaid = billData.paymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);

    if (!(Number(totalAmountPaid + newPaymentAmount) > Number(totalAmountDue))) {
      if (!newPaymentAmount || isNaN(Number(newPaymentAmount))) {
        alert('Please enter a valid payment amount.');
        return;
      }

      //const totalAmountDue = billData.purchasingDetails.reduce((total: number, item: { rate: number; quantity: number; }) => total + (item.rate * item.quantity), 0);
      //const totalAmountPaid = updatedPaymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);
      //const totalAmountPaid = billData.paymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);

      

      //console.log("Amout due: ", totalAmountDue);
      //console.log("Amount paid: ", Number(totalAmountPaid + newPaymentAmount) );
  
      const billStatus = Number(totalAmountPaid + newPaymentAmount) === totalAmountDue ? 'Completed' : 'Pending';

      const newPayment = {
        paymentDate: new Date().toISOString().split('T')[0],
        amountPaid: Number(newPaymentAmount),
        paymentMode: newPaymentMode,
        paymentDetails: newPaymentDetails,
        billStatus: billStatus
      };

      const updatedPaymentDetails = [...billData.paymentDetails, newPayment];
  

      const updatedBillData = {
        ...billData,
        paymentDetails: updatedPaymentDetails,
        billStatus: billStatus // Update bill status here
      };
  
      setBillData(updatedBillData);
      setNewPaymentAmount(0);
      setNewPaymentDetails('');
    } else {
      alert('Remaining amount due is: ' + Number(totalAmountDue - totalAmountPaid) + '. Please enter an amount less than or equal to the remaining amount due.');
    }
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
        </div>
      </div>

      <hr className="border-white mb-4"/>

      {billData && (
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

          <p className="mt-5 mb-2 text-lg font-bold">Payment Details:</p>
          <table className="w-full text-center border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-500 bg-gray-700">Index</th>
                <th className="border border-slate-500 bg-gray-700">Payment Date</th>
                <th className="border border-slate-500 bg-gray-700">Amount Paid</th>
                <th className="border border-slate-500 bg-gray-700">Payment Mode</th>
                <th className="border border-slate-500 bg-gray-700">Bill Status</th>
              </tr>
            </thead>
            <tbody>
              {billData.paymentDetails.map((payment: any, index: number) => (
                <tr key={index}>
                  <td className="border border-slate-500">{index+1}</td>
                  <td className="border border-slate-500">{payment.paymentDate}</td>
                  <td className="border border-slate-500">{payment.amountPaid}</td>
                  <td className="border border-slate-500">{payment.paymentMode}</td>
                  <td className="border border-slate-500">{payment.billStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Payment section */}
          {!isBillCompleted() && (
            <div className="mt-5">
              <p className="text-lg font-bold mb-2">Add Payment:</p>
              <div className="flex flex-col text-black mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
                <div className="flex flex-row w-full">
                  <input 
                    type="number" 
                    placeholder="Payment Amount"
                    className="border border-gray-400 rounded px-3 py-2 bg-gray-300 mb-2 w-6/12 mr-0.5"
                    value={newPaymentAmount} 
                    onChange={(e) => setNewPaymentAmount(Number(e.target.value))} 
                  />
                  <select 
                    value={newPaymentMode}
                    onChange={(e) => setNewPaymentMode(e.target.value)}
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
                  onChange={(e) => setNewPaymentDetails(e.target.value)} 
                />
                <button onClick={addPayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">Add Payment</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateBill;
