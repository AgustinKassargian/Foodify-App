import CategoryModel from "../../models/Category";
import { Request, Response } from "express";

const updateCategory = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const{name,active} = req.body;
    try{
        const actualCategory = await CategoryModel.findByIdAndUpdate({_id:id},{name,active})
        console.log(actualCategory)
        res.status(200).json(actualCategory)
    }
    catch(error){res.status(500).json('updateCategory error:' + error)}
}

export default updateCategory