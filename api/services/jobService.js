import Job from "../models/Job.js"

// Service for job-related operations

const jobService = {
  // Create a new job
  createJob: async (title, description, files, userId) => {
    try {
      const newJob = new Job({ title, description, files, userId });
      const savedJob = await newJob.save();
      return savedJob;
    } catch (error) {
      console.error('Error creating job:', error);
      throw new Error('Failed to create job');
    }
  },

  // Get all jobs
  getAllJobs: async () => {
    try {
      const jobs = await Job.find();
      return jobs;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw new Error('Failed to fetch jobs');
    }
  },

  // Add other job-related service functions as needed
};

module.exports = jobService;