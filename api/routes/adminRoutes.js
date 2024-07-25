import express from "express"
import adminController from "../controllers/adminController.js"
import jobController from "../controllers/jobController.js"

const router = express.Router()

router.get('/users', adminController.getAllUsers)
router.get('/jobs/:username', jobController.getJobsByUsername)

export default router