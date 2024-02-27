"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = exports.projectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.projectSchema = new mongoose_2.Schema({
    projectId: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: [String], default: [] },
    overview: { type: String, required: true },
    projectDescription: { type: String, required: true },
    outcome: { type: String, required: true },
    projectDetails: { type: String, required: true },
    reqiurements: { type: String, required: true },
    mentors: { type: [String], default: [] },
    contributors: { type: [String], default: [] },
    links: { type: [String], default: [] },
    contactInfo: { type: [String], default: [] },
    branch: { type: String, required: true },
    ownerId: { type: String, required: true },
});
exports.projectModel = mongoose_1.default.model("ProjectModel", exports.projectSchema);
