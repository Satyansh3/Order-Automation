// jobService.js

const jobService = {
  getJobsByUsername: async (username) => {
    try {
      const response = await fetch(`http://localhost:3000/jobs/user/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw new Error('Failed to fetch jobs');
    }
  },
  deleteJob: async (jobId) => {
    try {
        const response = await fetch(`http://localhost:3000/jobs/delete/${jobId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete job');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting job:', error.message);
        throw new Error('Failed to delete job');
    }
},
    createJob: async (jobData) => {
      try {
        // Make an API request to create a job
        const response = await fetch('http://localhost:3000/jobs/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jobData)
        });
        if (!response.ok) {
          throw new Error('Failed to create job');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error creating job:', error.message);
        throw new Error('Failed to create job');
      }
    }
  };
  
  export default jobService;
  