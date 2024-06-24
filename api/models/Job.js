import mongoose from "mongoose"
const jobSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['job received', 'staff allocated', 'in progress' , 'reviewed', 'completed'],
        default: 'job received'
    }
}, {timestamps: true})

const Job = mongoose.model('Job', jobSchema)
export default Job