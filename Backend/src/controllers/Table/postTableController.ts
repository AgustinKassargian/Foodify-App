import { Request, Response} from 'express'
import tableModel from "../../models/Table";

export const createTable = async(req: Request, res: Response)=>{
    const {table_number, max_capacity} = req.body
    try {
        const newTable = await tableModel.create({
            table_number,
            max_capacity
        })
        res.status(201).json(newTable)
    } catch (error) {
        res.status(500).json('Error: ' + error)
    }
}
