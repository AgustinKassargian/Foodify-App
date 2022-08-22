import { prop, getModelForClass } from "@typegoose/typegoose";
//import { categories, ICategory } from "../interfaces/enumCategory";
export class Dish {

  @prop({unique: true})
  public_id: string;

  @prop()
  name: string;

  @prop()
  category: string[];

  @prop()
  price: number;

  @prop()
  description: string;

  @prop()
  image: string | File;

  @prop({ default: true })
  active: boolean;

  @prop()
  rating: number

  @prop({default: false})
  tacc_free: boolean

  @prop({default:false})
  recomended: boolean

}

const dishModel = getModelForClass(Dish);

export default dishModel;
//