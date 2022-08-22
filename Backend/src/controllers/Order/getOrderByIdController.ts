import orderModel from "../../models/Order";
import { Request, Response } from "express";
import {IOrder} from '../../interfaces/InterfaceOrder'

export const getOrderById = async(req: Request, res: Response)=>{
    const {id} = req.params
    try {
        const orderById : IOrder | null = await orderModel.findById({_id:id}).populate('dishes', 'name + image + price -_id')
        res.status(200).json(orderById)
    } catch (error) {
        res.status(500).json(error)
    }
}     