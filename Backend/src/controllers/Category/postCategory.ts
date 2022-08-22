import {Request, Response} from 'express';
import CategoryModel from '../../models/Category';

export const createCategory = async(req:Request , res:Response)=>{
    const {name , active} = req.body
    try{
        const newCategory = await CategoryModel.create({
            name,
            active
        })
        res.status(201).json(`${newCategory}`)
    }
    catch(error){res.status(500).json('Error en createUser:' + error)}
}