import { Request, Response } from "express";
import tableModel from "../../models/Table";
import { ITable } from "../../interfaces/InterfaceTable";

export const getAllTables = async(req: Request, res:Response)=>{
    try {
        const allTables : ITable[] = await tableModel.find()
        res.status(200).json(allTables)
    } catch (error) {
        res.status(404).json(error)
    }
}