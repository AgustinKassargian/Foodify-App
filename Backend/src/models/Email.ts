import { prop, getModelForClass } from "@typegoose/typegoose";

export class Email{
    @prop()
    email:string;

}

const email = getModelForClass(Email)

export default email