import { prop, getModelForClass } from "@typegoose/typegoose";

export class Review {
    
    @prop()
    email:string;

    @prop()
    stars:number;
    
    @prop()
    body:string

    @prop()
    name:string
}

const reviewModel= getModelForClass(Review);

export default reviewModel