import mongoose, { mongo } from "mongoose";
import { Document, Schema } from "mongoose";
import { IUserInterface } from "../interfaces/user.interface";

export const userSchema = new Schema<IUserInterface>({
    userId:{type:String, required:true},
    userName:{type:String, required:true},
    skills:{type:[String] , default:[]},
    bio:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    address:{type:String, required:true},
    profession:{type:String, required:true},
    workExp:{type:String, required:true},
    projects:{type:[String] , default: []},
    contributedProjects:{type:[String], default:[]},
    ideas:{type:[String], default:[]},
    createdAt:{type:String, required:true},
});

export const userModel = mongoose.model<IUserInterface>("UserModel", userSchema);