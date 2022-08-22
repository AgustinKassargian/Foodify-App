import { prop, getModelForClass } from "@typegoose/typegoose";

export class Category{

    @prop()
    name: string

    @prop({default:true})
    active: boolean
}

const CategoryModel = getModelForClass(Category);

export default CategoryModel