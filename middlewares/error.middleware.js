const errorMiddleware = (err, req, res, next) => {
  try {
    let statusCode = err.statusCode || err.status || 500;
    let message = err.message || "Internal server error";
    let details;

    console.error(err);

    if (err.name === "CastError") {
      statusCode = 404;
      message = "Resource not found";
    }

    if (err.code === 11000) {
      statusCode = 409;
      const field = Object.keys(err.keyValue || {})[0];
      message = `${field ? `Duplicate ${field}` : "Duplicate value"} entered`;
    }

    if (err.name === "ValidationError") {
      statusCode = 400;
      details = Object.values(err.errors).map((val) => val.message);
      message = details.join(", ");
    }

    const response = {
      success: false,
      message,
    };

    if (details) {
      response.details = details;
    }

    if (process.env.NODE_ENV !== "production" && err.stack) {
      response.stack = err.stack;
    }

    res.status(statusCode).json(response);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;