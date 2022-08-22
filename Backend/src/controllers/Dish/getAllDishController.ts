import dishModel from '../../models/Dish'
import { Request, Response} from 'express'
import { IDish } from '../../interfaces/InterfaceDish'

const sortingDishes = (arr:Array<IDish> ,filter: string)=>{
    const ordered = arr.filter((e)=>e.category.includes(filter)).sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    })
    return ordered;
}
export const getAllDish = async(req: Request, res: Response)=>{
    try {
        const dishes: Array<IDish> = await dishModel.find()
        const starters: Array<IDish> = sortingDishes(dishes, 'Starter')
        const mains: Array<IDish> = sortingDishes(dishes, 'Main Dish')
        const desserts: Array<IDish> = sortingDishes(dishes, 'Dessert')
        const drinks: Array<IDish> = sortingDishes(dishes, 'Drink')
        const alldishes : Array<IDish> = starters.concat(mains).concat(desserts).concat(drinks)
        res.status(200).json(alldishes) 
    } catch (error) {
        res.status(404).json('ASI NO SE USA BESTIA MIRA ESTE ERROR ---> ' + error)
    }
}
        









