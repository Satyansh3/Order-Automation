import nodemailer from "nodemailer"
import emailConfig from "../config/email.js"

const transporter = nodemailer.createTransport({
    service: emailConfig.service,
    auth:{
        user: emailConfig.username,
        pass: emailConfig.password
    }
})
const emailService = {
    // Send OTP Code to user's email

    sendOTPByEmail: async (username, email, otpCode) => {
        const mailOptions = {
            from: emailConfig.sender,
            to: email,
            subject: 'OTP Verification Code',
            text: `Your OTP Code for verification is: ${otpCode}`
        };
        try {
            await transporter.sendMail(mailOptions)
        } catch (error) {
            console.error('Error sending email:', error)
            throw new Error('Faied to send OTP Code via email')
        }
    }
}
export default emailService