import { IProjectInterface } from "../database/interfaces/project.interface";
import { projectModel } from "../database/models/project.model";

export const createProjectRepo = async(project:IProjectInterface):Promise<boolean> => {
    try {
        const success = await projectModel.create(project);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getProjectRepo = async(projectId:string):Promise<IProjectInterface | void> => {
    try {
        const success = await projectModel.findOne({projectId:projectId});
        if(success) return success;
    } catch (error) {
        console.log(error);
    }
}

export const updateProjectRepo = async(project:IProjectInterface):Promise<IProjectInterface | void> => {
    try {
        const updatedProject = await projectModel.findOneAndUpdate({projectId:project.projectId} , project, {new:true});
        if(updatedProject) return updatedProject;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProjectRepo = async(projectId:string):Promise<boolean> => {
    try {
        const success = await projectModel.findOneAndDelete({projectId:projectId});
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}