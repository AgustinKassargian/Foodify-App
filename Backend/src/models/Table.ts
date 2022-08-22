import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Order } from "./Order";

export enum State_Table{
    available = 'available',
    busy = 'busy',
    maintenance = 'maintence'
}

export class Table {
    
    @prop({required:true})
    table_number: string;

    @prop({min:1})
    max_capacity: number;

    @prop({default: "available"})
    actual_state: State_Table

    @prop({default: false})
    call: boolean    
}

const tableModel = getModelForClass(Table)

export default tableModel
