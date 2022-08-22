import userModel from "../../models/user";
import { Request, Response } from "express";

export const getWaiter = async(req:Request, res: Response)=>{
    try{
        const allwaiters = await userModel.find({usertype: "Waiter"})
        res.status(200).json(allwaiters)
    }
    catch(error){res.status(404).json('getwaiter error -->' + error)};
    }
