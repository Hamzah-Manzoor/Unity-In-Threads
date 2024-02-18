import Bill from '../Models/bill-model.js';

export const getBill = async (request, response) => {
    try {
        const billNumber = request.params.billNumber;

        // // Fetch the bill from the database
        // const bill = await Bill.findOne({ billNumber });

        // if (!bill) {
        //   // If the bill is not found, insert the dummy bill document into the database
        //   const dummyBill = {
        //     billNumber: 112,
        //     discount: 0,
        //     name: 'Hassan Mir',
        //     contact: '03532644661',
        //     purchasingDetails: [
        //       {
        //         itemType: 'Ready Made',
        //         productCode: 'P002',
        //         productName: 'Product C',
        //         size: 'Large',
        //         orderNumber: '001',
        //         rate: 200,
        //         quantity: 2
        //       },
        //       {
        //         itemType: 'Order Make',
        //         productCode: 'P003',
        //         productName: 'Product D',
        //         size: 'Small',
        //         orderNumber: 'ODB002',
        //         rate: 250,
        //         quantity: 1
        //       }
        //     ],
        //     paymentDetails: [
        //       {
        //         paymentDate: '2024-01-30',
        //         amountPaid: 400,
        //         paymentMode: 'Credit Card'
        //       },
        //       {
        //         paymentDate: '2024-02-01',
        //         amountPaid: 250,
        //         paymentMode: 'Cash'
        //       },
        //     ]
        //   };

        //   await Bill.create(dummyBill);
        //   console.log('Bill Inserted');
        // }

        // Fetch the bill again after insertion
        const fetchedBill = await Bill.findOne({ billNumber });

        if (fetchedBill) {
            //console.log('Bill Fetched Successfully');
            response.status(200).json(fetchedBill);
        } else {
            //console.log('Bill not found');
            response.status(404).json({ error: 'Bill not found' });
        }
        } catch (error) {
            console.error("Error fetching or inserting bill:", error);
            response.status(500).json({ error: 'Internal Server Error' });
        }
}


export const updateCustomerInfo = async (request, response) => {
    try {
        const { billNumber, name, contact } = request.body;
    
        const bill = await Bill.findOne({ billNumber });
    
        if (!bill) {
          return response.status(404).json({ message: 'Bill not found' });
        }
    
        bill.name = name;
        bill.contact = contact;
    
        await bill.save();
    
        return response.status(200).json({ message: 'Customer info updated successfully', updatedBill: bill });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
      }
}


export const handleDiscount = async (request, response) => {
    try {
        const { billNumber, discountAmount } = request.body;

        // Find the bill with the provided bill number
        const bill = await Bill.findOne({ billNumber });

        if (!bill) {
            return response.status(404).json({ error: 'Bill not found' });
        }

        // Update the discount amount of the bill
        bill.discount = discountAmount;
        await bill.save();

        return response.status(200).json({ message: 'Discount amount updated successfully', updatedBill: bill });
        } catch (error) {
        console.error('Error updating discount amount:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
        }
}


export const addPayment = async (request, response) => {
    try {
        const { billNumber, newPayment } = request.body;
        const updatedBill = await Bill.findOneAndUpdate(
          { billNumber: billNumber },
          { $push: { paymentDetails: newPayment } },
          { new: true }
        );
        response.status(200).json({ message: 'Payment added successfully', updatedBill });
      } catch (error) {
        console.error('Error adding payment:', error);
        response.status(500).json({ error: 'Failed to add payment' });
      }
}


export const deletePayment = async (request, response) => {

}