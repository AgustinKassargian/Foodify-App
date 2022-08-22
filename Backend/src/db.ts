require('dotenv').config();
import mongoose from 'mongoose';


const {USER_DB, PASSWORD_DB, CLUSTER} = process.env
const ATLAS = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.xrmvdvc.mongodb.net/?retryWrites=true&w=majority`;


async function dbConnect(){

    try{
        const db =  await mongoose.connect(ATLAS)
        console.log('connected to', db.connection.name)
    }
    catch(error){console.log(error)}
};

dbConnect();

export default dbConnect;