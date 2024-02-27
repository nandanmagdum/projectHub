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
exports.updateUserWhenProjectDeletedRepo = exports.updateUserWhenProjectCreatedRepo = exports.getAllUserRepo = exports.deleteUserRepo = exports.updateUserRepo = exports.getUserRepo = exports.createUserRepo = void 0;
const user_model_1 = require("../database/models/user.model");
const createUserRepo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.userModel.create(user);
        return true;
    }
    catch (error) {
        console.log("error creating user");
        return false;
    }
});
exports.createUserRepo = createUserRepo;
const getUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.userModel.findOne({ userId: userId });
        if (user) {
            return user;
        }
    }
    catch (error) {
        console.log("error getting user");
    }
});
exports.getUserRepo = getUserRepo;
const updateUserRepo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_model_1.userModel.findOneAndUpdate({ userId: user.userId }, user, { new: true });
        if (newUser) {
            return newUser;
        }
    }
    catch (error) {
        console.log(error);
        console.log("Error updating the user");
    }
});
exports.updateUserRepo = updateUserRepo;
const deleteUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield user_model_1.userModel.findOneAndDelete({ userId: userId });
        if (success)
            return true;
        else
            return false;
    }
    catch (error) {
        console.log(error);
        console.log("Error updating the user");
        return false;
    }
});
exports.deleteUserRepo = deleteUserRepo;
// get all users
const getAllUserRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield user_model_1.userModel.find();
        if (allUsers) {
            return allUsers;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getAllUserRepo = getAllUserRepo;
const updateUserWhenProjectCreatedRepo = (projectId, ownerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield user_model_1.userModel.findOneAndUpdate({ userId: ownerId }, { $push: { projects: projectId } }, { new: true });
        if (success) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateUserWhenProjectCreatedRepo = updateUserWhenProjectCreatedRepo;
const updateUserWhenProjectDeletedRepo = (projectId, ownerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield user_model_1.userModel.findOneAndUpdate({ userId: ownerId }, { $pull: { projects: projectId } }, { new: true });
        if (success) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateUserWhenProjectDeletedRepo = updateUserWhenProjectDeletedRepo;
