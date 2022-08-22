import { Request, Response } from "express";
import userModel from "../../models/user";
import { IUser } from "../../interfaces/InterfaceUser";

export const getAllUsers = async(req:Request, res:Response)=>{
    console.log('entre al try')
    try {
        const allUsers : IUser[] = await userModel.find()
        res.status(200).json(allUsers)     
    } catch (error) {
        res.status(404).json(error)
    }

}