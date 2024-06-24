import express from "express"
const router = express.Router();
import jobController from "../controllers/jobController.js"

router.post('/create', jobController.createJob)

export default router
