import { ADD_JOB, SET_JOBS } from "../actions/actionTypes";
import { GET_JOB_DETAILS } from "../actions/actionTypes";
import { DELETE_JOB } from "../actions/actionTypes";

const jobReducer = (state= {jobs: []}, action) => {
    switch (action.type) {
        case ADD_JOB:
            return{
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case GET_JOB_DETAILS:
            return{
                ...state,
                jobs: state.jobs.map(job => job.id === action.payload.id ? action.payload : job),
            }
        case DELETE_JOB:
            const updatedJobs = state.jobs.filter((job) => job.id !== action.payload)
            return{
                ...state,
                jobs: updatedJobs,
            }
        case SET_JOBS:
            return {
                ...state,
                jobs: action.payload,
            };
        default:
            return state;
    }
}

export default jobReducer