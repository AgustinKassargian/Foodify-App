import { Ref } from "@typegoose/typegoose";
import { User_Types } from "../models/user";
import { Order } from "../models/Order";

export interface IUser {
    usertype: User_Types;
    name: string;
    lastname: string,
    email: string,
    age:number,
    orders: Ref<Order>[],
    active: boolean
}