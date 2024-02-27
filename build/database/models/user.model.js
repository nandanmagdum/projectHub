"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.userSchema = new mongoose_2.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    skills: { type: [String], default: [] },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    profession: { type: String, required: true },
    workExp: { type: String, required: true },
    projects: { type: [String], default: [] },
    contributedProjects: { type: [String], default: [] },
    ideas: { type: [String], default: [] },
    createdAt: { type: String, required: true },
});
exports.userModel = mongoose_1.default.model("UserModel", exports.userSchema);
