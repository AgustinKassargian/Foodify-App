import { Request, Response} from 'express'
import dishModel from '../../models/Dish'
import { v4 as uuidv4 } from 'uuid';
import { cloudynari } from '../../cloudinary';



export const createDish = async (req: Request, res:Response)=>{
  const {name, category, description, price, image, active, rating, recomended} = req.body
  try {
      const bodyImage : any = image
      if(bodyImage !== undefined){
        // let pepito = await cloudynari(image)
        // pepito = pepito.secure_url 
        const newDish = await dishModel.create({
          name,
          category, 
          description,
          price,
          image,
          active,
          rating,
          recomended,
          public_id: uuidv4()
        })  
        res.status(201).json(`${newDish}`)
      return
    }
        const newDish = await dishModel.create({
          name,
          category, 
          description,
          price,
          active,
          rating,
          recomended,
          public_id: uuidv4()})
          res.status(200).json(newDish)
      }
    catch (error) {
    res.status(500).json('Error: ' + error)
    }
}
//