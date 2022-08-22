import {Request, Response} from 'express'
import orderModel from '../../models/Order'
import {IOrder} from '../../interfaces/InterfaceOrder'

export const updateOrder = async(req:Request, res:Response)=>{
    const {id} = req.params
    const {order_number, final_price, dishes, timestamps, actual_state, waiter, comments} = req.body
    try {
        const currentOrder : IOrder | null = await orderModel.findByIdAndUpdate({_id:id}, {order_number, $inc:{final_price}, $push: {dishes},timestamps, actual_state, waiter, $set:{comments}}) 
        res.status(200).json(currentOrder?.order_number + ' Updated Successfully')
    } catch (error) {
        res.status(500).json("Fail to update, Error:" + error)
    }
}

export default updateOrder