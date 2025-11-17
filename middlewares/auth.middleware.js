import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const unauthorizedError = (message = "Unauthorized") => {
  const error = new Error(message);
  error.statusCode = 401;
  return error;
};

const authorize = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) throw unauthorizedError();

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) throw unauthorizedError();

    req.user = user;
    req.auth = { userId: user._id.toString() };

    next();
  } catch (error) {
    let authError = error;

    if (error.name === "TokenExpiredError") {
      authError = unauthorizedError("Session expired. Please sign in again.");
    } else if (!error.statusCode) {
      authError = unauthorizedError();
    }

    next(authError);
  }
};

export default authorize;
