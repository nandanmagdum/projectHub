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
exports.deleteProjectRepo = exports.updateProjectRepo = exports.getProjectRepo = exports.createProjectRepo = void 0;
const project_model_1 = require("../database/models/project.model");
const createProjectRepo = (project) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield project_model_1.projectModel.create(project);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createProjectRepo = createProjectRepo;
const getProjectRepo = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield project_model_1.projectModel.findOne({ projectId: projectId });
        if (success)
            return success;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProjectRepo = getProjectRepo;
const updateProjectRepo = (project) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProject = yield project_model_1.projectModel.findOneAndUpdate({ projectId: project.projectId }, project, { new: true });
        if (updatedProject)
            return updatedProject;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProjectRepo = updateProjectRepo;
const deleteProjectRepo = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield project_model_1.projectModel.findOneAndDelete({ projectId: projectId });
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.deleteProjectRepo = deleteProjectRepo;
