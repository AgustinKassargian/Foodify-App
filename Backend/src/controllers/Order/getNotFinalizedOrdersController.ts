import orderModel from "../../models/Order";
import { Request, Response } from "express";
import {IOrder} from '../../interfaces/InterfaceOrder'

export const getNotFinalizedOrder = async(req: Request, res:Response)=>{
    try {
        const {id} = req.params
        const orders : IOrder[] | null = await orderModel.find({table: id, actual_state:{$ne: "finalized"}})
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json(error)
    }
}

//