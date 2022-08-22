import dishModel from "../../models/Dish";
import { Request, Response} from 'express'
import { IDish } from "../../interfaces/InterfaceDish";

export const getName = async(req:Request,res:Response)=>{
    
    const {name}  = req.query
    console.log(name)
    try{
        if(name && typeof(name)==='string'){
            let dishName:Array<IDish> = await dishModel.find()
            console.log(dishName)
            const filtrado = dishName.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
            console.log(filtrado)
            res.status(200).json(filtrado)
        }
    }
    catch(error){res.status(404).json('error de getName --->'+error)}
}