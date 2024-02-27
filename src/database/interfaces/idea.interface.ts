import { Document } from "mongoose";

export interface IIdeaInterface extends Document {
    ideaId:string,
    title:string,
    outcome:string,
    benifits:string,
    ownerId:string,
    contributors:string[]
}