import orderModel from "../../models/Order";
import { Request, Response } from "express";
import {IOrder} from '../../interfaces/InterfaceOrder'

export const getAllOrders = async(req: Request, res: Response)=>{
    try {
        const allOrders : IOrder[] = await orderModel.find().populate('dishes', 'name + price -_id').populate('table', 'table_number -_id')
        res.status(200).json(allOrders.reverse())
    } catch (error) {
        res.status(404).json(error)
    }
}
//.populate('dishes', 'name -_id').populate('table', 'table_number -_id')
//.populate({path: "dishes", select: "name", }).populate({path: "table", select: "table_number"})