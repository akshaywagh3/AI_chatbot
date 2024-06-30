import { Response,Request,NextFunction } from "express";
import user from "../models/user.js";
import {hash} from "bcrypt";


export const getAllUsers =async (req:Request,res:Response,next:NextFunction)=>{
    try{    
        const users = await user.find();
        return res.status(200).json({message:"ok",users});
    }
    catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
} ;

export const userSignup =async (req:Request,res:Response,next:NextFunction)=>{
    try{ 
        //user Sign up
        const {name,email,password} = req.body;   
        const hashPass = await hash(password,10);
        const User = new user({name,email,password:hashPass});
        await User.save();
        return res.status(201).json({message:"ok",User});
    }
    catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
} ;