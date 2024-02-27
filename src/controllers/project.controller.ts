import { Request, Response } from "express";
import { getProjectRepo, createProjectRepo, updateProjectRepo, deleteProjectRepo } from "../repositories/project.repository";
import { projectModel } from "../database/models/project.model";

export const createProjectController = async(req:Request, res:Response) => {
    const project = req.body;
    try {
        const success = await createProjectRepo(project);
        if(success){
            res.status(200).json({"Status": "Project created"});
        }
    } catch (error) {
        res.status(500).json({"Error": error});
    }
}


export const getProjectController = async(req:Request, res:Response) => {
    const projectId = req.params.projectId;
    try {
        const success = await getProjectRepo(projectId);
        if(success){
            res.status(200).json({"Data":success});
        } else {
            res.status(500).json({"Status":"Error getting project"});
        }
    } catch (error) {
        res.status(500).json({"Status":error});
    }
}

export const updateProjectController = async(req:Request, res:Response) => {
    const project = req.body;
    try {
        const success = updateProjectRepo(project);
        if(success != null){
            res.status(200).json({"Succcess":success});
        } else {
 
            res.status(500).json({"Error":"user not updated"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"error":error});
    }
}

export const deleteProjectController = async(req:Request, res:Response) => {
    const projectId = req.params.projectId;
    try {
        const success = await deleteProjectRepo(projectId);
        if(success) {
        res.status(200).json({"Status":"Project deleted"});

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"Error":error});
    }
}

// get all projects
// export const getAllProject