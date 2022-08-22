// import dishModel from '../models/Dish'
// import { Request, Response} from 'express'
// import { IDish } from '../interfaces/InterfaceDish'



// export const filterDish = async(req:Request, res: Response)=>{
//     try {
//        const {category} = req.query
//        if(category && typeof(category) ==='string'){
//            const allDishes : Array<IDish> = await dishModel.find()
//            const allDishesFiltered : Array<IDish> = allDishes.filter(e=>e.category.includes(category))
//            res.status(200).json(allDishesFiltered)
        
//        }
//     } catch (error) {
//         res.status(400).json('ESTE ES EL ERROR DEL BACK---> ' + error)
//     }


//  }