import { Router } from "express";

import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
} from "../controller/auth.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", authorize, signOut);
authRouter.get("/me", authorize, getCurrentUser);

export default authRouter;
