import express from "express"
const router = express.Router()
import everSignController from "../controllers/everSignController.js";

// Route to create e-signature
router.post('/initiate', everSignController.createESignature);

export default router