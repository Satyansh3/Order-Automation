
const authorizationMiddleware = (requiredRole) => (req, res, next) => {
    const { role } = req.user;
    try {
      // Check if user's role matches the required role
      if (role !== requiredRole) {
        throw new Error('Unauthorized');
      }
      next();
    } catch (error) {
      console.error('Authorization error:', error.message);
      res.status(403).json({ message: 'Unauthorized' });
    }
};
export default authorizationMiddleware


  