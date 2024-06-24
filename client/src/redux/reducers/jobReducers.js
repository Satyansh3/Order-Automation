import { ADD_JOB } from "../actions/actionTypes";
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
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const updatedJobs = state.jobs.filter((job) => job.id !== action.payload)
            return{
                ...state,
                jobs: updatedJobs,
            }
        default:
            return state;
    }
}

export default jobReducer