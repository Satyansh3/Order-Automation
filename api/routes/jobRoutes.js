import express from "express"
const router = express.Router();
import jobController from "../controllers/jobController.js"

router.post('/create', jobController.createJob)

router.get('/user/:username', jobController.getJobsByUsername)

router.delete('/delete/:id', jobController.deleteJob)

export default router
