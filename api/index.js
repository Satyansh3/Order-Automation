import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import connectDB from "./config/database.js"
import {createProxyMiddleware} from "http-proxy-middleware"
import oAuthRoutes from "./routes/oAuthRoutes.js"
import everSignRoutes from "./routes/everSignRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import authenticationMiddleware from "./middleware/authentication.js"
import authorizationMiddleware from "./middleware/authorization.js"
// Connect to MongoDB database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())


app.use('/xodo-auth', oAuthRoutes, createProxyMiddleware({
  target: 'https://satyanshsharma.eversign.com',
  changeOrigin: true,
  pathRewrite: {
    '^/xodo-auth': '',
  }
}))

// Ever Sign Routes
app.use('/api/eversign', everSignRoutes); // Mount the everSignRoutes at '/api/eversign'

// Routes
app.use('/auth', authRoutes);

// User Routes
app.use('/api', userRoutes);




// Authentication middleware for job and admin routes
app.use(authenticationMiddleware);



// Job routes
app.use('/jobs', jobRoutes);

// Authorization middleware for admin routes
app.use(authorizationMiddleware('admin'));

// Admin routes
app.use('/admin', adminRoutes);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
