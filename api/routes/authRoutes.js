import express from "express"
import authController from "../controllers/authController.js"


const router = express.Router()
// Router for sending OTP to user's email

router.post('/send-otp', authController.sendOTP)


// Route for verifying OTP Provided by user
router.post('/verify-otp', authController.verifyOTP)

export default router