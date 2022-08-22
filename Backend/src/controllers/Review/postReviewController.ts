import {Request, Response} from 'express';
import reviewModel from '../../models/Reviews';

export const createReview = async (req:Request,res:Response)=>{
    const {email,stars,body, name} = req.body
    try{
        const newReview = await reviewModel.create({
            email,
            stars,
            body,
            name
        })
        await newReview.save();
        res.status(201).json(`${newReview}`)
    }
    catch(error){res.status(500).json('error createReview ' + error)}
}
//