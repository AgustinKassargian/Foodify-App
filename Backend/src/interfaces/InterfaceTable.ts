import { State_Table } from "../models/Table";

export interface ITable{
    table_number: string,
    max_capacity: number,
    actual_state: State_Table
    call: boolean
}