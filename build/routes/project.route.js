"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const projectRouter = (0, express_1.Router)();
projectRouter.get("/", project_controller_1.getAllProjectsController);
projectRouter.get("/:projectId", project_controller_1.getProjectController);
projectRouter.post("/", project_controller_1.createProjectController);
projectRouter.put("/", project_controller_1.updateProjectController);
projectRouter.delete("/:ownerId/:projectId", project_controller_1.deleteProjectController);
exports.default = projectRouter;