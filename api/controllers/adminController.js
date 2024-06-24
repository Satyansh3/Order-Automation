import User from "../models/User.js"
// Controller for admin-specific operations

const adminController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
export default adminController

// Add other admin-specific controller functions as needed
