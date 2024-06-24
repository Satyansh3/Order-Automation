// Service for OTP generation and verification

const otpService = {
    // Generate a random OTP code
    generateOTP: () => {
      const otpLength = 6;
      const digits = '0123456789';
      let otp = '';
      for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
      }
      return otp;
    },
  
    // Generate expiration time for OTP (e.g., 5 minutes from now)
    generateOTPExpiration: () => {
      const expirationMinutes = 5;
      const now = new Date();
      now.setMinutes(now.getMinutes() + expirationMinutes);
      return now;
    },
  
    // Verify if provided OTP code matches the stored OTP code and expiration time
    verifyOTP: (user, otpCode) => {
      if (!user.otpCode || !user.otpExpiration) {
        return false; // OTP code or expiration time not set
      }
      if (otpCode !== user.otpCode) {
        return false; // OTP code does not match
      }
      const now = new Date();
      if (now > user.otpExpiration) {
        return false; // OTP code expired
      }
      return true;
    }
  };
  
export default otpService;
  