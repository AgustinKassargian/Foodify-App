import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Dish } from "./Dish";
import { Table } from "./Table";


export enum State_Order{
    pending = "pending",
    received = "received",
    ready = "ready",
    committed = "comitted",
    finalized = "finalized"
}

export class Order{
    
    @prop()
    order_number: string

    @prop({ref: ()=> Dish})
    dishes: Ref<Dish>[]

    @prop({ref: ()=> Table})
    table: Ref<Table>

    @prop({type: ()=>Date})
    timestamps: Date

    @prop()
    final_price: number

    @prop({default: "pending"})
    actual_state: State_Order

    @prop()
    waiter: string
    
    @prop({})
    comments: string
}

const orderModel = getModelForClass(Order)
export default orderModel