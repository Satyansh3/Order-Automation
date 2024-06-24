import { ADD_JOB } from "./actionTypes"
import { DELETE_JOB } from "./actionTypes";

let nextId = 0;
export const addJob = (job) => ({
    type: ADD_JOB,
    payload: {
        ...job,
        id: nextId++,
    }
})

export const deleteJob = (jobId) => {
    return{
        type: DELETE_JOB,
        payload: jobId
    }
}

