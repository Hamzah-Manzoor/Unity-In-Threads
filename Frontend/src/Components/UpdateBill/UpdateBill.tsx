import React, { useState } from 'react';

const UpdateBill = () => {
  // State to store the entered bill number
  const [billNumber, setBillNumber] = useState('');
  // State to store the fetched bill data
  const [billData, setBillData] = useState<any>(null);

  // Function to fetch bill data based on the entered bill number
  const fetchBill = () => {
    // Perform API call or fetch operation to get bill data based on billNumber
    // For now, using dummy data
    const dummyBillData = {
      billNumber: '123456',
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
          amountPaid: 250,
          paymentMode: 'Cash',
          billStatus: 'Completed'
        },
        {
          paymentDate: '2024-02-01',
          amountPaid: 100,
          paymentMode: 'Credit Card',
          billStatus: 'Pending'
        }
      ]
    };
    // Set the fetched bill data to the state
    setBillData(dummyBillData);
  };

  return (
    <div>
      <h2>Update Bill</h2>
      <div>
        <label htmlFor="billNumber">Enter Bill Number:</label>
        <input type="text" id="billNumber" value={billNumber} onChange={(e) => setBillNumber(e.target.value)} />
        <button onClick={fetchBill}>Fetch Bill</button>
      </div>
      {billData && (
        <div>
          <h3>Purchasing Details</h3>
          <table>
            <thead>
              <tr>
                <th>Item Type</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Size</th>
                <th>Order#/ODB#</th>
                <th>Rate</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {billData.purchasingDetails.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.itemType}</td>
                  <td>{item.productCode}</td>
                  <td>{item.productName}</td>
                  <td>{item.size}</td>
                  <td>{item.orderNumber || item.odbNumber}</td>
                  <td>{item.rate}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Payment Details</h3>
          <table>
            <thead>
              <tr>
                <th>Payment Date</th>
                <th>Amount Paid</th>
                <th>Payment Mode</th>
                <th>Bill Status</th>
              </tr>
            </thead>
            <tbody>
              {billData.paymentDetails.map((payment: any, index: number) => (
                <tr key={index}>
                  <td>{payment.paymentDate}</td>
                  <td>{payment.amountPaid}</td>
                  <td>{payment.paymentMode}</td>
                  <td>{payment.billStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UpdateBill;
