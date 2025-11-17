import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

const sanitizeUser = (userDoc) => {
  if (!userDoc) return userDoc;
  const user = userDoc.toObject ? userDoc.toObject() : userDoc;
  delete user.password;
  return user;
};

const buildAuthResponse = (res, statusCode, message, user) => {
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return res.status(statusCode).json({
    success: true,
    message,
    data: { token, user: sanitizeUser(user) },
  });
};

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const { name, email, password } = req.body || {};
    const normalizedName = name?.trim();
    const normalizedEmail = email?.trim().toLowerCase();

    if (![normalizedName, normalizedEmail, password].every(Boolean)) {
      const error = new Error("Name, email and password are required");
      error.statusCode = 400;
      throw error;
    }

    if (password.length < 6) {
      const error = new Error("Password must be at least 6 characters long");
      error.statusCode = 400;
      throw error;
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [newUser] = await User.create(
      [
        {
          name: normalizedName,
          email: normalizedEmail,
          password: hashedPassword,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    return buildAuthResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    next(error);
  } finally {
    session.endSession();
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      const error = new Error("Email and password are required");
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }

    return buildAuthResponse(res, 200, "User signed in successfully", user);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "User signed out successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    if (!req.user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: sanitizeUser(req.user),
    });
  } catch (error) {
    next(error);
  }
};
