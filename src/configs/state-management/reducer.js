import { combineReducers } from "redux";
import { USER_LOGOUT, USER_LOGIN } from "./actions";
const initialState = {
  isLogged: false,
  firsttname: "",
  lastname: "",
  email: "",
  phoneNumbr: "",
  password: "",
  photoUrl: "",
  uid: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ user });
