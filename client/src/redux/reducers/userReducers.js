import { SET_USER } from "../actions/actionTypes";
import { GET_USER_FOLDERS } from "../actions/actionTypes";


const userReducer = (state = {username:"", email:""}, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;