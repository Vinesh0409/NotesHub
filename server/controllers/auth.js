import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes'

const register = async (req,res)=>{
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user:user,
        token:token
    })
}

const login = (req,res)=>{
    res.status(200).send("login")
}

export {register,login};