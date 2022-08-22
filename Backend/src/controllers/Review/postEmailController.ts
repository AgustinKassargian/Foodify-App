import { Request,Response} from 'express';
import emailes from '../../models/Email';
import { info } from '../../nodemail';

export const postEmail = async(req:Request,res:Response)=>{
    const {email}= req.body
    try{
        const newEmail= await emailes.create({
            email,
        })
        await newEmail.save();
        info(email)
        res.status(201).json(`${newEmail}`)
    }
    catch(error){res.status(500).json('error PostEmail:'+ error)}
}