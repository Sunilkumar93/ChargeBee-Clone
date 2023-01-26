import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_RESET,
} from "./Login.ActionTypes";

const token = localStorage.getItem("token") || "";

const initState = {
  token: token,
  isAuth: token ? true : false,
  isError: false,
  message: null,
  // data: loginData,
};

const LoginReducer = (state = initState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case LOGIN_SUCCESS: {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }
      // isAuth = localStorage.getItem("isAuth");
      return {
        ...state,
        isAuth: payload.token ? true : false,
        token: payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isError: true,
        message: payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      // localStorage.setItem("isAuth", false);

      return {
        ...state,
        isAuth: false,
        token: "",
        isError: false,
        message: null,
      };
    }
    case LOGIN_RESET: {
      return {
        ...state,
        isAuth: false,
        isError: false,
        message: null,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
