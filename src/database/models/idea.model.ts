import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { IIdeaInterface } from "../interfaces/idea.interface";

export const ideaSchema = new Schema<IIdeaInterface>({
    ideaId:{type:String, required:true},
    title:{type:String, required:true},
    outcome:{type:String, required:true},
    benifits:{type:String, required:true},
    ownerId:{type:String, required:true},
    contributors:{type:[String], default:[]}
});