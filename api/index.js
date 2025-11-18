import app from "../app.js";
import connectToDatabase from "../database/mongodb.js";

// Initialize database connection
await connectToDatabase();

// Export Express app as Vercel serverless function
export default app;
