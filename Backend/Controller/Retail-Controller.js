import Bill from '../Models/bill-model.js';

export const addBill = async (request, response) => {
  const { discount, resumable, name, contact, purchasingDetails, paymentDetails } = request.body;

  try {
    const lastBill = await Bill.findOne({}, {}, { sort: { 'billNumber': -1 } });
    let lastBillNumber = 0;
    if (lastBill) {
      lastBillNumber = lastBill.billNumber;
    }
    const newBillNumber = lastBillNumber + 1;

    const billData = new Bill({
      billNumber: newBillNumber,
      resumable: resumable,
      discount: discount || 0,
      name: name || "",
      contact: contact || "",
      purchasingDetails,
      paymentDetails: paymentDetails || [],
    });

    await billData.save();
    response.status(201).json({ message: 'Bill added successfully' });
  } catch (error) {
    response.status(500).json({ message: 'Could not add bill', error: error.message });
  }
};

export const resumeBill = async (request, response) => {
  try {
    const billNumber = request.params.billNumber;
    const { purchasingDetails } = request.body;

    const bill = await Bill.findOne({ billNumber });

    if (!bill) {
        return response.status(404).json({ error: 'Bill not found' });
    }

    bill.purchasingDetails = purchasingDetails;
    await bill.save();

    return response.status(200).json({ message: 'Purchasing Details updated successfully', updatedBill: bill });
    } catch (error) {
    console.error('Error updating Purchasing Details:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const closeBill = async (request, response) => {
  try {
    const billNumber = request.params.billNumber;
    //const { purchasingDetails } = request.body;

    const bill = await Bill.findOne({ billNumber });

    if (!bill) {
        return response.status(404).json({ error: 'Bill not found' });
    }

    bill.resumable = false;
    await bill.save();

    return response.status(200).json({ message: 'Bill Closed successfully'});
    } catch (error) {
    console.error('Error Closing Bill:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getBill = async (request, response) => {
  try {
    const billNumber = request.params.billNumber;

    const fetchedBill = await Bill.findOne({ billNumber });

    if (fetchedBill) {
        response.status(200).json(fetchedBill);
    } else {
        response.status(404).json({ error: 'Bill not found' });
    }
    } catch (error) {
        console.error("Error fetching or inserting bill:", error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}

export const fetchResumableBills = async (request, response) => {
  try {

    //console.log('You are here in fetchResumableBills');

    const resumableBills = await Bill.find({ resumable: true });

    if (resumableBills.length > 0) {
      response.status(200).json(resumableBills);
    } else {
      response.status(404).json({ error: 'No resumable bills found' });
    }
  } catch (error) {
    console.error('Error fetching resumable bills:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getLastBillNumber = async (request, response) => {
  try {
      // Fetch the last bill from the database
      const lastBill = await Bill.findOne({}, {}, { sort: { 'billNumber': -1 } });

      if (lastBill) {
          response.status(200).json({ lastBillNumber: lastBill.billNumber });
      } else {
          response.status(404).json({ error: 'No bills found' });
      }
  } catch (error) {
      console.error("Error fetching last bill number:", error);
      response.status(500).json({ error: 'Internal Server Error' });
  }
};


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

        const bill = await Bill.findOne({ billNumber });

        if (!bill) {
            return response.status(404).json({ error: 'Bill not found' });
        }

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
  try {
    const { billNumber, index } = request.params;
    
    const bill = await Bill.findOne({ billNumber });
    
    if (!bill) {
      return response.status(404).json({ error: 'Bill not found' });
    }

    bill.paymentDetails.splice(index, 1);
    
    await bill.save();
    response.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error('Error deleting payment:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};


export const handleChangeInPaymentDetail = async (request, response) => {
  try {
    const { billNumber, amountPaid, paymentMode, index } = request.body;

    const bill = await Bill.findOne({ billNumber });

    if (!bill) {
      return response.status(404).json({ error: 'Bill not found' });
    }
    
    const paymentDetail = bill.paymentDetails[index];

    paymentDetail.amountPaid = amountPaid;
    paymentDetail.paymentMode = paymentMode;

    await bill.save();
    response.json({ message: 'Changes saved successfully' });
  } catch (error) {
    console.error('Error saving changes:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};