import { ADD_USER } from "../actions/actionTypes";

const initialState = {
    users: [],
};
const adminReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export default adminReducer