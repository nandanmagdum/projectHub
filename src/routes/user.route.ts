import { Router } from "express";
import { createUserController, deleteUserController, getAllUserController, getUserController, updateUserController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.get("/", getAllUserController);
userRouter.get("/:userId", getUserController);
userRouter.put("/", updateUserController);
userRouter.delete("/:userId", deleteUserController);

export default userRouter;