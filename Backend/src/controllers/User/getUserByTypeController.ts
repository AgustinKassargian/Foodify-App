import { Request, Response } from "express";
import userModel from "../../models/user";
import { IUser } from "../../interfaces/InterfaceUser";

export const getUserByType = async(req:Request, res:Response)=>{
    const {type} = req.query
    try {
        const usersByType : IUser[] = await userModel.find({usertype: type})
        res.status(200).json(usersByType)
    } catch (error) {
        res.status(500).json(error)
    }
}
