import { Router } from "express";
import { createProjectController, deleteProjectController, getAllProjectsController, getProjectController, updateProjectController } from "../controllers/project.controller";

const projectRouter = Router();

projectRouter.get("/", getAllProjectsController);
projectRouter.get("/:projectId", getProjectController);
projectRouter.post("/", createProjectController);
projectRouter.put("/", updateProjectController);
projectRouter.delete("/:ownerId/:projectId", deleteProjectController);

export default projectRouter;