import { ADD_JOB } from "./actionTypes"
import { DELETE_JOB } from "./actionTypes";
import { SET_JOBS } from "./actionTypes";
import jobService from "../../services/jobService.js";

export const addJob = (job) => ({
    type: ADD_JOB,
    payload: job,
});
  
  export const setJobs = (jobs) => ({
    type: SET_JOBS,
    payload: jobs,
});
  
  export const fetchJobs = (userId) => async (dispatch) => {
    try {
      const jobs = await jobService.getJobsByUserId(userId);
      dispatch(setJobs(jobs));
    } catch (error) {
      console.error('Failed to fetch jobs', error);
    }
};

  export const deleteJob = (jobId) => async (dispatch) => {
    try {
      await jobService.deleteJob(jobId);
      dispatch({
        type: DELETE_JOB,
        payload: jobId,
      });
    } catch (error) {
      console.error('Failed to delete job', error);
    }
};
