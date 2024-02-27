import { IUserInterface } from "../database/interfaces/user.interface";
import { userModel } from "../database/models/user.model";

export const createUserRepo = async(user:IUserInterface):Promise<boolean> => {
    try {
        await userModel.create(user);
        return true;
    } catch (error) {
        console.log("error creating user");
        return false;
    }
}

export const getUserRepo = async(userId:string):Promise<IUserInterface | void> => {
    try {
        const user = await userModel.findOne({userId:userId});
        if(user){
            return user;
        } 
    } catch (error) {
        console.log("error getting user");
    }
}

export const updateUserRepo = async(user:IUserInterface):Promise<IUserInterface | void> => {
    try {
        const newUser = await userModel.findOneAndUpdate({userId:user.userId} , user, {new:true});
        if(newUser){
            return newUser;
        }
    } catch (error) {
        console.log(error);
        console.log("Error updating the user");
    }
}

export const deleteUserRepo = async(userId:string):Promise<boolean> => {
    try {
        const success = await userModel.findOneAndDelete({userId:userId});
        if(success) return true;
        else return false;
    } catch (error) {
        console.log(error);
        console.log("Error updating the user");
        return false;
    }
}

// get all users
export const getAllUserRepo = async():Promise<IUserInterface[] | null> => {
    try {
        const allUsers = await userModel.find();
        if(allUsers){
            return allUsers;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}