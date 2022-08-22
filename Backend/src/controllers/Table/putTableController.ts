import {Request, Response} from 'express'
import tableModel from '../../models/Table'
import { ITable } from '../../interfaces/InterfaceTable'

const updateTable = async(req:Request, res:Response)=>{
    const {id} = req.params
    const{table_number, max_capacity, actual_state, call}  = req.body
    try {
        const currentDish : ITable|null = await tableModel.findByIdAndUpdate({_id:id}, {table_number, max_capacity, actual_state, call})
        res.status(200).json(`${currentDish?.table_number} Updated Successfully`) 
    } catch (error) {
        res.status(500).json("Fail to update, Error:" + error)
    }
}

export default updateTable
