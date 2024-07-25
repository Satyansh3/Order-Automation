// authService.js

const authService = {
  verifyOTP: async (username, email, otpCode) => {
    try{
      // Make an API Request to verify OTP
      const response = await fetch('http://localhost:3000/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, otpCode})
      })
      return response
    }
    catch(error){
      console.error('Cannot verify OTP')
      throw new Error('cannot verify OTP')
    }
  },
  sendOTP: async (username, email) => {
    try {
      // Make an API request to send OTP
      const response = await fetch('http://localhost:3000/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email })
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
  },
  saveUserSession: async(user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user))
  },
  getUserSession: () => {
    const user = localStorage.getItem('loggedInUser')
    return user ? JSON.parse(user) : null;
  }
};

export default authService;

  