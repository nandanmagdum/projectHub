import { Router } from "express";
import testRouter from "./testRouter";
import userRouter from "./user.route";
import projectRouter from "./project.route";

const router = Router();

router.use("/test", testRouter);
router.use("/user", userRouter);
router.use("/project", projectRouter);
export default router;