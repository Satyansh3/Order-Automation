import User from "../models/User.js"

import otpService from "../services/otpService.js"
import emailService from "../services/emailService.js"

// Generate and send OTP Code to user's email


const authController = {
    sendOTP: async (req, res) => {
        try {
            const { email } = req.body;        
            // check if user exists            
            var user = await User.findOne({ email })
            if (!user) {
                user = new User({email})
            }
            // Generate OTP code
            const otpCode = otpService.generateOTP();
            const otpExpiration = otpService.generateOTPExpiration();

            // Save OTP code and expiration time to user document
            user.otpCode = otpCode;
            user.otpExpiration = otpExpiration;

            // console.log(user)
            await user.save()

            //Send OTP Code to user's email
            await emailService.sendOTPByEmail(email, otpCode)
            console.log('done')
            res.status(200).json({ message: 'OTP sent successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal server error' })
        }
    },
    //Verify the OTP Code provided by the user
    verifyOTP: async (req, res) => {
        try {
            const { email, otpCode } = req.body
            console.log("Email", email)
            console.log("Otp code", otpCode)
            //Check if user exists
            const user = await User.findOne({ email, otpCode })
            console.log(user)
            
            if (!user) {
                return res.status(404).json({ message: 'Invalid OTP Code' })
            }
            // await user.save()
            //Clear OTP Code and expiration time after successful verification
            // user.otpCode = undefined;
            // user.otpExpiration = undefined;
            await user.save()

            res.status(200).json({ message: 'OTP Verified Successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export default authController
