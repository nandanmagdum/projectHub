"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjectsController = exports.deleteProjectController = exports.updateProjectController = exports.getProjectController = exports.createProjectController = void 0;
const project_repository_1 = require("../repositories/project.repository");
const user_repository_1 = require("../repositories/user.repository");
const createProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = req.body;
    try {
        const success = yield (0, project_repository_1.createProjectRepo)(project);
        if (success) {
            const success2 = yield (0, user_repository_1.updateUserWhenProjectCreatedRepo)(project.projectId, project.ownerId);
            if (success2) {
                res.status(200).json({ "Status": "Project created && user updated" });
            }
            else {
                res.status(200).json({ "Status": "Project created but user not updated" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ "Error": error });
    }
});
exports.createProjectController = createProjectController;
const getProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.projectId;
    try {
        const success = yield (0, project_repository_1.getProjectRepo)(projectId);
        if (success) {
            res.status(200).json({ "Data": success });
        }
        else {
            res.status(500).json({ "Status": "Error getting project" });
        }
    }
    catch (error) {
        res.status(500).json({ "Status": error });
    }
});
exports.getProjectController = getProjectController;
const updateProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = req.body;
    try {
        const success = (0, project_repository_1.updateProjectRepo)(project);
        if (success != null) {
            res.status(200).json({ "Succcess": success });
        }
        else {
            res.status(500).json({ "Error": "user not updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.updateProjectController = updateProjectController;
const deleteProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.projectId;
    const ownerId = req.params.ownerId;
    try {
        const success = yield (0, project_repository_1.deleteProjectRepo)(projectId);
        if (success) {
            const success2 = yield (0, user_repository_1.updateUserWhenProjectDeletedRepo)(projectId, ownerId);
            if (success2) {
                res.status(200).json({ "status": "Project deleted && user updated" });
            }
            else {
                res.status(200).json({ "Status": "Project deleted but user not updated" });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "Error": error });
    }
});
exports.deleteProjectController = deleteProjectController;
// get all projects
const getAllProjectsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield (0, project_repository_1.getAllProjectRepo)();
        if (success) {
            res.status(200).json({ "All Projects": success });
        }
        else {
            res.status(500).json({ "Error": "Error getting all projects" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "Error": error });
    }
});
exports.getAllProjectsController = getAllProjectsController;
