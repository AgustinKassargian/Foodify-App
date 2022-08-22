import  {Request, Response} from "express"
import orderModel from "../../models/Order"
import {IOrder} from '../../interfaces/InterfaceOrder'

export const createOrder = async(req:Request, res:Response)=>{
    const {final_price, dishes, table, comments,waiter} = req.body
    const order : Date = new Date()
    const order_number : string = order.getFullYear().toString()+order.getMonth()+order.getDate()+order.getHours()+order.getMinutes()
    try {
        const newOrder : IOrder = await orderModel.create({
            order_number: order_number,
            final_price,
            dishes,
            table,
            timestamps: new Date(),
            comments,
            waiter,
        })
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(500).json('Error: ' + error)
    }
}