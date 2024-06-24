import User from "../models/User.js"

// Service for user-related operations



const userService = {
  // Get user by ID
  createUser: async(email) => {
    try {
      const newUser = new User({email})
      await newUser.save()
      return newUser;
    } catch (error) {
      throw new Error(error.message)
    }
  },
  getUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error('Failed to fetch user');
    }
  },

  // Add other user-related service functions as needed
};

module.exports = userService;
