import mongoose from "mongoose"
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      files: [{
        name: String,
        url: String,
      }],
      username:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      paymentUrl: {
        type: String,
        default: null,  // Default value as null, optional field
      }
}, {timestamps: true})

const Job = mongoose.model('Job', jobSchema)
export default Job