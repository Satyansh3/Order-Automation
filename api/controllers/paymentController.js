import { initiatePayment } from "../services/payStationService.js";
import { sendPaymentNotification } from "../services/notificationService.js";
import Job from "../models/Job.js";

const paymentController = {
    initiatePaymentHandler: async (req, res) => {
        const { jobId, amount, clientEmail } = req.body;
        try {
            const paymentUrl = await initiatePayment(jobId, amount);
            const updatedJob = await Job.findByIdAndUpdate(
                jobId, 
                { paymentUrl: paymentUrl },
                { new: true }
            );
            await sendPaymentNotification(clientEmail, paymentUrl);
            res.status(200).json({ paymentUrl });
        } catch (error) {
            res.status(500).json({ message: 'Failed to initiate payment', error: error.message });
        }
    }
}
export default paymentController