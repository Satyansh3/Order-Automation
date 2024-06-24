// jobService.js

const jobService = {
    getJobs: async () => {
      try {
        // Make an API request to fetch jobs
        const response = await fetch('/api/jobs');
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
  
    createJob: async (jobData) => {
      try {
        // Make an API request to create a job
        const response = await fetch('/api/jobs', {
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
        console.error('Error creating job:', error);
        throw new Error('Failed to create job');
      }
    }
  };
  
  export default jobService;
  