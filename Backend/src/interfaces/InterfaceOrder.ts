import { Ref } from '@typegoose/typegoose';
import { Dish } from '../models/Dish';
import { Table } from '../models/Table';
import { State_Order } from '../models/Order';

export interface IOrder{
    order_number: string
    final_price: number;
    dishes: Ref<Dish>[];
    table: Ref<Table>
    timestamps: Date
    actual_state: State_Order
    waiter: string
    //faltaria el mozo?
}