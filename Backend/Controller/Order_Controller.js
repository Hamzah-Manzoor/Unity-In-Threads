import ResumeOrder from '../Models/Resume_Orders.js';
import ShortUniqueId from 'short-unique-id';

export const addresumeOrders = async(req,res)=>{
    try {
        const {orders} = req.body;
        const uid = new ShortUniqueId({length : 10});
        console.log(uid)

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
