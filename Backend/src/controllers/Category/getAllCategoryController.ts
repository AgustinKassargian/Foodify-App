import CategoryModel from "../../models/Category";
import { Request, Response } from "express";

export const getAllCategories = async(req:Request, res:Response)=>{
    try{
        const categories = await CategoryModel.find()
        res.status(200).json(categories)
    }
    catch(error){res.status(404).json('getAllCategories error:'+error)}
}