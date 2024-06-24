import User from "../models/User.js"

const adminService = {
    //Get all users
    getAllUsers: async() => {
        try {
            const users = await User.find()
            return users
        } catch (error) {
            console.error('Error fetching users:', error)
            throw new Error('Failed to fetch users')
        }
    },

    // Delete a user by ID
    deleteUserById: async(userId) => {
        try {
            const deletedUser = await User.findByIdAndDelete(userId)
            if(!deletedUser){
                throw new Error('User not found!')
            }
            return deletedUser
        } catch (error) {
            console.error('Error deleting user', error)
            throw new Error('failed to delete user')
        }
    }
}

module.exports = adminService