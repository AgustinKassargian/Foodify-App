import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Order } from "./Order";

export enum User_Types{
    super_admin = "Super_Admin" ,//0
    admin = "Admin",
    waiter = "Waiter",//2
}

export class User{
    @prop({default: "Waiter"})
    usertype:User_Types

    @prop()
    name:string;

    @prop()
    lastname:string

    @prop()
    email:string

    @prop()
    age:number

    @prop()
    orders:Ref<Order>[]

    @prop({default: true})
    active:boolean
}

const userModel= getModelForClass(User)

export default userModel;