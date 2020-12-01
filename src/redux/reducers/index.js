import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  isLoggedIn: false,
  auth: null,
};

export default function commonReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        auth: action.payload.userData,
      };
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        auth: null
      }
    }
    default:
      return state;
  }
}
