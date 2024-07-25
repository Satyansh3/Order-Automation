import Job from "../models/Job.js"
import User from "../models/User.js";
const jobController = {
    createJob: async(req,res) => {
        const { title, description, files, username } = req.body;
        console.log(req.body)
        try {
          const user = await User.findOne({username});
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          const job = new Job({
            title,
            description,
            files,
            user: user._id,
          });
          await job.save();

          console.log("Job saved successfully")
      
          // Save job reference in the user's document
          user.jobs.push(job._id);
          await user.save();

      
          // Also, save job reference in the user's document
        //   await User.findByIdAndUpdate(userId, { $push: { jobs: job._id } });
      
          res.status(201).json(job);
        } catch (error) {
          res.status(400).json({ message: 'Failed to create job', error });
        }
    },
    getJobsByUsername : async (req, res) => {
      try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        const jobs = await Job.find({ user: user._id });
        res.status(200).json(jobs);
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch jobs', error });
      }
    },
    deleteJob: async(req,res) => {
      try {
        const jobId = req.params.id;
        const job = await Job.findByIdAndDelete(jobId);
        if (!job) {
          return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
      }
    }
}


export default jobController