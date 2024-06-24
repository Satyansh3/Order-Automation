// authService.js

const authService = {
  verifyOTP: async (email, otpCode) => {
    try{
      // Make an API Request to verify OTP
      const response = await fetch('http://localhost:3000/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, otpCode})
      })
      return response
    }
    catch(error){
      console.error('Cannot verify OTP')
      throw new Error('cannot verify OTP')
    }
  },
  sendOTP: async (email) => {
    try {
      // Make an API request to send OTP
      const response = await fetch('http://localhost:3000/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (!response.ok) {

        throw new Error('Failed to send OTP');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      throw new Error('Failed to send OTP');
    }
  }
};

export default authService;

  