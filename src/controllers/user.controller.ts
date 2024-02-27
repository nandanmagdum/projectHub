import { Request, Response } from "express";
import { createUserRepo, deleteUserRepo, getAllUserRepo, getUserRepo, updateUserRepo } from "../repositories/user.repository";
import { TypePredicateKind } from "typescript";
import { log } from "console";

export const createUserController = async(req:Request, res:Response) => {
    const user = req.body;

    try {
        const success = await createUserRepo(user);
        if(success){
            res.status(200).json({"Status":"User created"});
        } else {
            res.status(500).json({"Status": "User not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"Status": "Critical Server Error"});

    }
}

export const getUserController = async(req:Request, res:Response) => {
    const userId = req.params.userId;
    try {
        const user = await getUserRepo(userId);
        if(user) {
            res.status(200).json({"User Info":user});
        } else {
            res.status(500).json({"Error":"user not fetched"});
        }
    } catch (error) {
        res.status(500).json({"Status": "Critical User getting user"});
    }
}

export const updateUserController = async(req:Request, res:Response) => {
    const updatedUser = await req.body;
    try {
        const newUser = await updateUserRepo(updatedUser);
        if(newUser) {
            res.status(200).json({"new user":newUser});
        } else {
            res.status(500).json({"Status": "User not updated"});
        }
    } catch (error) {
        res.status(500).json({"Status":"user updation failed"});
    }
}

export const deleteUserController = async(req:Request, res:Response) => {
    const userId = req.params.userId;
    try {
        const success = await deleteUserRepo(userId);
        if(success) {
            res.status(200).json({"status":"user deleted .... !!!"});
        } else {
            res.status(500).json({"error":"user not deleted"});
        }
    } catch (error) {
        console.log("Error deleting user");
        console.log(error);
        res.status(500).json({"error":error});
    }
}

export const getAllUserController = async(req:Request, res:Response) => {
    try {
        const success = await getAllUserRepo();
        if (success) {
            res.status(200).json({"All Users":success});
        } else {
            res.status(500).json({"Error":"Cannot get all users"});
        }
    } catch (error) {
        console.log("Error getting all users");
        res.status(500).json({"error":error});
    }
}