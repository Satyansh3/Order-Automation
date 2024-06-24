import authService from "../services/authService.js"

const authenticationMiddleware = async (req, res, next) => {
  const { email, otpCode } = req.body;
  try {
    // Verify user credentials (email and OTP)
    const user = await authService.verifyUserCredentials(email, otpCode);
    // Attach user object to request for further processing
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
export default authenticationMiddleware
