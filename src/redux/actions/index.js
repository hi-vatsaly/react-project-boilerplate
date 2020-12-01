import { LOGIN, LOGOUT } from "../constants/index";

export const loginUser = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
