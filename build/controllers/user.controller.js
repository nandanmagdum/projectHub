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
exports.getAllUserController = exports.deleteUserController = exports.updateUserController = exports.getUserController = exports.createUserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const success = yield (0, user_repository_1.createUserRepo)(user);
        if (success) {
            res.status(200).json({ "Status": "User created" });
        }
        else {
            res.status(500).json({ "Status": "User not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "Status": "Critical Server Error" });
    }
});
exports.createUserController = createUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield (0, user_repository_1.getUserRepo)(userId);
        if (user) {
            res.status(200).json({ "User Info": user });
        }
        else {
            res.status(500).json({ "Error": "user not fetched" });
        }
    }
    catch (error) {
        res.status(500).json({ "Status": "Critical User getting user" });
    }
});
exports.getUserController = getUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield req.body;
    try {
        const newUser = yield (0, user_repository_1.updateUserRepo)(updatedUser);
        if (newUser) {
            res.status(200).json({ "new user": newUser });
        }
        else {
            res.status(500).json({ "Status": "User not updated" });
        }
    }
    catch (error) {
        res.status(500).json({ "Status": "user updation failed" });
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const success = yield (0, user_repository_1.deleteUserRepo)(userId);
        if (success) {
            res.status(200).json({ "status": "user deleted .... !!!" });
        }
        else {
            res.status(500).json({ "error": "user not deleted" });
        }
    }
    catch (error) {
        console.log("Error deleting user");
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.deleteUserController = deleteUserController;
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield (0, user_repository_1.getAllUserRepo)();
        if (success) {
            res.status(200).json({ "All Users": success });
        }
        else {
            res.status(500).json({ "Error": "Cannot get all users" });
        }
    }
    catch (error) {
        console.log("Error getting all users");
        res.status(500).json({ "error": error });
    }
});
exports.getAllUserController = getAllUserController;
