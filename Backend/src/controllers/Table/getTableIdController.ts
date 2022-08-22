import {Request, Response} from 'express'
import tableModel from '../../models/Table'
import { ITable } from '../../interfaces/InterfaceTable'

export const getTableById = async(req: Request, res:Response)=>{
    const {id} = req.params
    try {
        const table : ITable | null = await tableModel.findById({_id:id})
        res.status(200).json(table)
    } catch (error) {
        res.status(500).json(error)
    }
}