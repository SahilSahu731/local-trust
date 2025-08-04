import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) return res.status(401).json({ message: "Not Authenticated" });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by id
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "No user found with this token",
      });
    }

    // Check if user is active
    if (user.status !== "active") {
      return res.status(401).json({
        success: false,
        message: "User account is not active",
      });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not Authenticated" });
    }

    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

export { protect , authorize };