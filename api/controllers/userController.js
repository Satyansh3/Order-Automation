import User from "../models/User.js"


const userController = {
    // Controller to create a new user
    createUser: async (req, res) => {
        try {
            console.log('here1')
            const { email } = req.body;
            const newUser = new User({email});
            console.log('here 2')
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message });
        }
    },


    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId)
            // console.log(user)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json(user)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },

    // Controller to fetch all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default userController


