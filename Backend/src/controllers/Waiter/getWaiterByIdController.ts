import userModel from "../../models/user";
import { Request, Response } from "express";

export const getWaiterById = async (req:Request,res:Response)=>{
    const {id} = req.params
    try{
        const waiterId = await userModel.findById(id)
        res.status(200).json(waiterId)
    }
    catch(error){res.status(404).json("error -->" + error)}
}