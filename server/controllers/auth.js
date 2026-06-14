import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes'
import BadRequestError from '../error/bad-request.js'
import UnAuthenticatedError from '../error/unauthenticated.js'

const register = async (req,res)=>{
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user:user,
        token:token
    })
}

const login = async (req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        throw new BadRequestError("please enter email and password");
    }
    const user = await User.findOne({email:email});
    if(!user){
        throw new UnAuthenticatedError('invalid credentials')
    }
    const isCorrectPassword = await user.matchPassword(password);
    if(!isCorrectPassword){
        throw new UnAuthenticatedError("password is incorrect");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({
        user:user,
        token:token
    })
}

export {register,login};