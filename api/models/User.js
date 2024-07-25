import mongoose from "mongoose"
import Job from "./Job.js"

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true
    },
    username:{
        type: String,
        required: true,
        unique:true,
    },
    otpCode:{
        type: String
    },
    otpExpiration: {
        type: Date,
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    }],
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)
export default User