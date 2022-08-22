const cloudinary = require("cloudinary");
require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure:true,
});

export const cloudynari = async (path:string)=>{
    if(!path)throw new Error("path is required")
    return await cloudinary.v2.uploader.upload(path,{folder:"Dish"})
}