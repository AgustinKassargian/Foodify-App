import dishModel from "../../models/Dish";
import e, { Request, Response } from "express";
import { IDish } from "../../interfaces/InterfaceDish";

export const getDishByDescription = async(req:Request, res:Response)=>{

    const {description} = req.query
    console.log(description)
    try{
        if(description && typeof(description)==='string'){
            console.log('entre al if')
            let dishDes:Array<IDish> = await dishModel.find()
            console.log(dishDes[0].description)
            const filter = dishDes.filter(e => e.description.toLowerCase().includes(description.toLowerCase()))
            
            console.log('hola')
            res.status(200).json(filter)
        }
    }
    catch(e){res.status(404).json('error getDescription -->' + e)}
}