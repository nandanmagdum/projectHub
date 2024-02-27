import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { IProjectInterface } from "../interfaces/project.interface";
import { IUserInterface } from "../interfaces/user.interface";

export const projectSchema = new Schema<IProjectInterface>({
    projectId:{type:String, required:true},
    title:{type:String, required:true},
    image:{type:[String], default:[]},
    overview:{type:String, required:true},
    projectDescription:{type:String, required:true},
    outcome:{type:String, required:true},
    projectDetails:{type:String, required:true},
    reqiurements:{type:String, required:true},
    mentors:{type:[String], default:[]},
    contributors:{type:[String], default:[]},
    links:{type:[String], default:[]},
    contactInfo:{type:[String], default:[]},
    branch:{type:String, required:true},
    ownerId:{type:String, required:true},
});

export const projectModel = mongoose.model<IProjectInterface>("ProjectModel", projectSchema);