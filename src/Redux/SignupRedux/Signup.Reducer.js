import {
  SIGNUP_FAILED,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "./Signup.ActionTypes";

const initState = {
  isSignup: false,
  isError: false,
  data: "",
};

const signupReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSignup: true,
        data: payload,
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        isError: true,
      };
    }
    case SIGNUP_RESET: {
      return {
        isSignup: false,
        isError: false,
        data: "",
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
