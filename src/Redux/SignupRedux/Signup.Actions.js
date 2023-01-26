import axios from "axios";
import {
  SIGNUP_FAILED,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "./Signup.ActionTypes";

export const signup =
  ({ payload }) =>
  async (dispatch) => {
    // console.log(payload);
    try {
      let res = await axios.post(
        "https://busy-jade-pangolin-sock.cyclic.app/auth/register",
        payload
      );

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return res.data;
    } catch (error) {
      dispatch({ type: SIGNUP_FAILED });
    }
  };

export const signupReset = () => (dispatch) => {
  dispatch({ type: SIGNUP_RESET });
};
