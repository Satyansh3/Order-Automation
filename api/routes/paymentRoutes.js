import express from "express"
import paymentController from "../controllers/paymentController.js"
const router = express.Router()

router.post('/initiate', paymentController.initiatePaymentHandler)

export default router