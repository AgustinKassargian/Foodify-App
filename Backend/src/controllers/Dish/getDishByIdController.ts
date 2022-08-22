import dishModel from "../../models/Dish";
import { Request, Response } from "express";
import { IDish } from "../../interfaces/InterfaceDish";

export const getDishesById = async(req:Request,res:Response)=>{
    
    const {id} = req.params
//
    try{
        const dishId:IDish|null= await dishModel.findById({_id:id})
        res.status(200).json(dishId)
    }
    catch(error){res.status(404).json('error ---> ' + error)}
}