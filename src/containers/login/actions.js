import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from "./constants";

export const getLogin = (data) => ({
  type: GET_LOGIN,
  data,
});

export const getLoginSuccess = (data) => ({
  type: GET_LOGIN_SUCCESS,
  data,
});

export const getLoginFail = (data) => ({
  type: GET_LOGIN_FAIL,
  data,
});
