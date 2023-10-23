import { Router } from "express";
import { justifyContent } from "../controllers/justify.controller";

const justifyRouter: Router = Router();

justifyRouter.post("/", justifyContent);

export default justifyRouter;
