import express from "express"
const router = express.Router();
import userController from "../controllers/userController.js"

// Route to create a new user
router.post('/users', userController.createUser);

// Route to fetch all users
router.get('/users', userController.getAllUsers);

export default router