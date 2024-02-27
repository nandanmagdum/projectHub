import { Request, Response } from "express";
import { getProjectRepo, createProjectRepo, updateProjectRepo, deleteProjectRepo, getAllProjectRepo } from "../repositories/project.repository";
import { projectModel } from "../database/models/project.model";
import { updateUserWhenProjectCreatedRepo, updateUserWhenProjectDeletedRepo } from "../repositories/user.repository";

export const createProjectController = async (req: Request, res: Response) => {
    const project = req.body;
    try {
        const success = await createProjectRepo(project);
        if (success) {
            const success2 = await updateUserWhenProjectCreatedRepo(project.projectId, project.ownerId);
            if (success2) {
                res.status(200).json({ "Status": "Project created && user updated" });
            } else {
                res.status(200).json({ "Status": "Project created but user not updated" });
            }
        }
    } catch (error) {
        res.status(500).json({ "Error": error });
    }
}


export const getProjectController = async (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    try {
        const success = await getProjectRepo(projectId);
        if (success) {
            res.status(200).json({ "Data": success });
        } else {
            res.status(500).json({ "Status": "Error getting project" });
        }
    } catch (error) {
        res.status(500).json({ "Status": error });
    }
}

export const updateProjectController = async (req: Request, res: Response) => {
    const project = req.body;
    try {
        const success = updateProjectRepo(project);
        if (success != null) {
            res.status(200).json({ "Succcess": success });
        } else {

            res.status(500).json({ "Error": "user not updated" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}

export const deleteProjectController = async (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    const ownerId = req.params.ownerId;
    try {
        const success = await deleteProjectRepo(projectId);
        if (success) {
            const success2 = await updateUserWhenProjectDeletedRepo(projectId, ownerId);
            if (success2) {
                res.status(200).json({ "status": "Project deleted && user updated" });
            } else {
                res.status(200).json({ "Status": "Project deleted but user not updated" });
            }

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "Error": error });
    }
}

// get all projects
export const getAllProjectsController = async (req: Request, res: Response) => {
    try {
        const success = await getAllProjectRepo();
        if (success) {
            res.status(200).json({ "All Projects": success });
        } else {
            res.status(500).json({ "Error": "Error getting all projects" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "Error": error });
    }
}