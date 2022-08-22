import { Request, Response} from 'express';
import userModel from '../../models/user';

export const createUser = async (req:Request,res:Response)=>{
    const { usertype , name , lastname , email , age } = req.body
    try{
        const newWaiter = await userModel.create({
            usertype,
            name,
            lastname,
            email,
            age
        })
        res.status(201).json(`${newWaiter}`)
    }
    catch(error){res.status(500).json('Error en el createWaiter' + error)}
}