import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoute from "./routes/auth.route.js";

dotenv.config();

// create express app
const app = express();

// security middleware
app.use(helmet());

//rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use('/api', limiter);

// cors
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

// logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use("/api/v1/auth", authRoute);

// test route
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Global error handler (we'll improve this later)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
});


export default app;
