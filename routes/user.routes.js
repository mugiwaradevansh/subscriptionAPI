import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.use(authorize);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) =>
  res.status(501).json({ success: false, message: "Not implemented" })
);

userRouter.put("/:id", (req, res) =>
  res.status(501).json({ success: false, message: "Not implemented" })
);

userRouter.delete("/:id", (req, res) =>
  res.status(501).json({ success: false, message: "Not implemented" })
);

export default userRouter;
