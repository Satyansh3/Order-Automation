import User from "../models/User.js"
import otpService from "./otpService.js"

const authService = {
    verifyUserCredentials: async(email, otpCode) => {
        try {
            console.log(email,otpCode)
            const user = await User.findOne({email, otpCode})
            
            if(!user){
                throw new Error('User not found')
            }
    
            // Verify OTP Code
            if(!otpService.verifyOTP(user,otpCode)){
                throw new Error('Invalid OTP Code')
            }
            return user
        } catch (error) {
            console.error('Error verifying user credentials:', error)
            throw new Error('Failed to verify user credentials')
        }
    }
}

export default authService;