import { Document } from "mongoose";

export interface IProjectInterface extends Document {
    projectId:string,
    title:string,
    image:string[],
    overview:string,
    projectDescription:string,
    outcome:string,
    projectDetails:string,
    reqiurements:string,
    mentors:string[],
    contributors:string[],
    links:string[],
    contactInfo:string[],
    branch:string,
    ownerId:string,
    createdAt:string
}