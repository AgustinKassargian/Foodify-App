import reviewModel from "../../models/Reviews";
import { Request, Response } from "express";

export const getAllReviews = async(req:Request,res:Response)=>{
    try{
        const allReview = await reviewModel.find()
        res.status(200).json(allReview)
    }
    catch(error){res.status(404).json('Error en el getReviews' + error)}
}