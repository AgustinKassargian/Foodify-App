import { Request,Response} from 'express';
import userModel from '../../models/user';
import { IUser } from '../../interfaces/InterfaceUser';

const updateUser = async (req:Request, res:Response)=>{
    const {id}=  req.params
    const {usertype,name,lastname,email,age,orders,active} = req.body
    try{
        const actualUser : IUser | null = await userModel.findByIdAndUpdate({id:id},{usertype,name,lastname,email,age,orders,active})
        res.status(200).json(actualUser)
    }catch(error){res.status(500).json(error)}
}

export default updateUser