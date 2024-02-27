import { Document } from "mongoose";

export interface IUserInterface extends Document {
    userId:string,
    userName:string,
    skills:string[],
    bio:string,
    email:string,
    phoneNumber:string,
    address:string,
    profession:string,
    workExp:string,
    projects:string[],
    contributedProjects:string[],
    ideas:string[],
    createdAt:string,
}