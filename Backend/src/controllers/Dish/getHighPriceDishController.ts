import dishModel from '../../models/Dish'
import { Request, Response} from 'express'

export const getHighPriceDish = async (req: Request, res: Response)=>{
    try {
        const alldishes = await dishModel.find()
        const orderedDishes = alldishes.sort(function (a, b) {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
        });
        res.status(200).json(orderedDishes)
    } catch (error) {
        res.status(401).json(error)
    }   
}
 