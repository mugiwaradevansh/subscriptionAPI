import { config } from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

// Load env files in priority order: specific -> local -> default .env
config({ path: `.env.${NODE_ENV}.local`, override: true });
config({ path: `.env.local`, override: false });
config();

const env = process.env;

export const PORT = env.PORT || 5500;
export const DB_URI = env.DB_URI || env.MONGODB_URI || "";
export const JWT_SECRET = env.JWT_SECRET || "dev-subscription-secret";
export const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN || "7d";
export const CLIENT_URL = env.CLIENT_URL || "http://localhost:5173";
export const ARCJET_ENV = env.ARCJET_ENV;
export const ARCJET_KEY = env.ARCJET_KEY;
export const QSTASH_TOKEN = env.QSTASH_TOKEN;
export const QSTASH_URL = env.QSTASH_URL;
export const EMAIL_PASSWORD = env.EMAIL_PASSWORD;
export const SERVER_URL = env.SERVER_URL || `http://localhost:${PORT}`;

export { NODE_ENV };
