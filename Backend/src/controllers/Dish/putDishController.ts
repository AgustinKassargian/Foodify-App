import dishModel from "../../models/Dish"
import {Request, Response}  from 'express'
import { cloudynari } from "../../cloudinary"

const updateDish = async (req:Request, res:Response)=>{
    const {id}= req.params
    const {name, category, description, price, active, image, rating, tacc_free,recomended, } = req.body
    //const {name, category, description, price, image,active} = req.body
    
    try{
        const bodyImage : any  = image
        if(bodyImage !== undefined){
            let pepito = await cloudynari(image)
            pepito = pepito.secure_url
            const actualDish = await dishModel.findByIdAndUpdate({_id:id} , {name, category, description, price, image:pepito,active,rating, tacc_free,recomended } )
            res.status(200).json(actualDish)
            return
        }
        const actualDish = await dishModel.findByIdAndUpdate({_id:id} , {name, category,description, price,rating, tacc_free, recomended})

        res.status(200).json(actualDish)
}
    catch(error){
        res.status(500).json(error)
    }
}


export default updateDish