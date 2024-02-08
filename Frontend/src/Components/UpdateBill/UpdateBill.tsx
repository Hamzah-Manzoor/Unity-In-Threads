import { useState } from 'react';

const UpdateBill = () => {

  const [billNumber, setBillNumber] = useState('');
  const [billData, setBillData] = useState<any>(null);

  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [newPaymentMode, setNewPaymentMode] = useState('Cash');
  const [newPaymentDetails, setNewPaymentDetails] = useState('');

  const [changedRows, setChangedRows] = useState(new Set<number>());
  const [editableIndex, setEditableIndex] = useState<number | null>(null);

  const [editedPaymentMode, setEditedPaymentMode] = useState<string | null>(null);
  const [editedPaymentAmount, setEditedPaymentAmount] = useState<number | null>(null);

  const fetchBill = () => {
    const foundBill = dummyBills.find(bill => bill.billNumber === billNumber);
    if (foundBill) {
      setBillData(foundBill);
    } else {
      alert('Bill not found. Please enter a valid bill number.');
    }
  };

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
          id: 1,
          paymentDate: '2024-01-30',
          amountPaid: 100,
          paymentMode: 'Credit Card',
          billStatus: 'Pending'
        },
        // {
        //   id: 2,
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
          id: 1,
          paymentDate: '2024-01-30',
          amountPaid: 400,
          paymentMode: 'Credit Card',
          billStatus: 'Pending'
        },
        {
          id: 2,
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
    const totalAmountPaid = billData.paymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);

    if (!(Number(totalAmountPaid + newPaymentAmount) > Number(totalAmountDue))) {
      if (!newPaymentAmount || isNaN(Number(newPaymentAmount))) {
        alert('Please enter a valid payment amount.');
        return;
      }
  
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

  const handleSaveChanges = (index: number) => {
    if (editedPaymentAmount !== null) {
      const confirmation = window.confirm('Are you sure you want to save the changes?');
      if (confirmation) {
        const totalAmountDue = billData.purchasingDetails.reduce((total: number, item: { rate: number; quantity: number; }) => total + (item.rate * item.quantity), 0);
        const totalAmountPaid = billData.paymentDetails.reduce((total: number, payment: { amountPaid: any; }) => total + payment.amountPaid, 0);
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
          setEditableIndex(null);
          // Once the changes are saved, update the UI accordingly
          const updatedChangedRows = new Set<number>(changedRows);
          updatedChangedRows.delete(index);
          setChangedRows(updatedChangedRows);
        } else {
          alert('Total amount paid cannot exceed the total amount due.');
        }
      }
    } else if (editedPaymentMode !== null) {
      const confirmation = window.confirm('Are you sure you want to save the changes?');
      if (confirmation) {
        const updatedPaymentDetails = billData.paymentDetails.map((payment: any, i: number) => {
          if (i === index) {
            return { ...payment, paymentMode: editedPaymentMode };
          }
          return payment;
        });
        const updatedBillData = { ...billData, paymentDetails: updatedPaymentDetails };
        setBillData(updatedBillData);
        setEditedPaymentMode(null);
        setEditableIndex(null);
        // Once the changes are saved, update the UI accordingly
        const updatedChangedRows = new Set<number>(changedRows);
        updatedChangedRows.delete(index);
        setChangedRows(updatedChangedRows);
      }
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
    const totalAmountDue = billData.purchasingDetails.reduce((total: number, item: any) => total + item.rate * item.quantity, 0);
    return totalAmountPaid === totalAmountDue ? 'Completed' : 'Pending';
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
      )}
    </div>
  );
};

export default UpdateBill;
