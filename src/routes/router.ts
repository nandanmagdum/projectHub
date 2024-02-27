import { Router } from "express";
import testRouter from "./testRouter";
import userRouter from "./user.route";

const router = Router();

router.use("/test", testRouter);
router.use("/user", userRouter);

export default router;