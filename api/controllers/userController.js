import User from "../models/User.js"


const userController = {
    // Controller to create a new user
    createUser: async (req, res) => {
        const { email, username } = req.body;
        try {
          let user = await User.findOne({ email });
          if (!user) {
            user = new User({ email, username });
          } else {
            user.username = username;
          }
          await user.save();
          console.log("User is saved")
          res.status(201).json(user);
        } catch (error) {
          res.status(400).json({ error: error.message });
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
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default userController


