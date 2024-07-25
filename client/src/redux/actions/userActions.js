import { SET_USER, ADD_USER } from "./actionTypes";
import { GET_USER_FOLDERS } from "./actionTypes";

let nextIdd=0;
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
};
export const addUser = (user) => {
  return{
    type: ADD_USER,
    payload: user
  }
}
export const getUserFolders = (userId) => {
  return {
    type: GET_USER_FOLDERS,
    payload: userId
  };
};