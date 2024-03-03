import Order from '../Models/Order_modal.js';
import ResumeOrder from '../Models/Resume_Orders.js';
import ShortUniqueId from 'short-unique-id';
import FormDataModel from '../Models/SizeForm.js';
import shortid from 'shortid';



export const addresumeOrders = async(req,res)=>{
    try {
        const {orders} = req.body;
        const uid = new ShortUniqueId({length : 10});
        //console.log(uid)

        const newOrder = new ResumeOrder({
            orders : orders , 
            orderID : uid.rnd()
        });


        await newOrder.save();

        return res.status(200).send({
            message : "Order Saved Successfully"
        })
    } catch (error) {
        console.log(error)

        return res.status(500).send({
            message : error
        })
    }

}


export const SizeForm = async(req,res)=>{
    try {
        const {formData , comment , base64Array}= req.body;
        console.log(base64Array)
        console.log(`${formData.customerName}-${formData.sizeFor}-${shortid.generate()}`)

        const newSizeForm = new FormDataModel({
            sizeFormId : `${formData.customerName}-${formData.sizeFor}-${shortid.generate()}`,
            formData : formData , 
            comments : {
                comment : comment , 
                files : base64Array
            }
        })

        await newSizeForm.save();

        return res.status(200).send({
            message : "New Size Form saved and Created"
        })


        console.log(base64Array)
    } catch (error) {
        console.log(error)
            return res.status(500).send({
                message : "Error in creation of the Size Form"
            })
    }
}

export const getOrders = async(req,res)=> {
    try {
        const orders =  await ResumeOrder.find();
        console.log(orders)

        res.status(200).send({
            orders : orders
        })
    } catch (error) {
        res.status(500).send({
            message : "An error Occured"
        })
    }
}

export const getOrder = async(req,res)=>{
    try {

        const orderID = req.query.orderID;
        console.log('recieved')
        console.log(orderID)

        ResumeOrder.findOne({orderID : orderID}).then((orders)=>{
            console.log(orders)
            return res.status(200).send({
                orders : orders
            })
        }).catch((error)=>{
            return res.status(500).send({
                error : error
            })
        })
        



    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error : error
        })        
    }
}


export const addOrder = async(req,res)=>{
    try {
        // Extract order data from the request body
        const {newOrder} = req.body;
    
        console.log(newOrder)
        // Create a new order instance
        const newOrderData = new Order({
          orders: newOrder.orders,
          refSizeForm: newOrder.refSizeForm,
          Dates: [
            {
              tryDateFactory: newOrder.tryDateFactory,
              tryDateActual: newOrder.tryDateActual,
              deliveryDateFactory: newOrder.deliveryDateFactory,
              deliveryDateActual: newOrder.deliveryDateActual,
            }
          ],
          notes: newOrder.notes
        });
    
        // Save the new order to the database
        await newOrderData.save();
    
        return res.status(201).json({ message: 'Order created successfully' });
      } catch (error) {
        console.error('Error inserting order:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}
