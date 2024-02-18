import ResumeOrder from '../Models/Resume_Orders.js';

export const addresumeOrders = async(req,res)=>{
    try {
        const orders = req.body;
        const newOrder = new ResumeOrder(orders)

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
