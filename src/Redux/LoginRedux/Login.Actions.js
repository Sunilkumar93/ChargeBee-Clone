import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Login.ActionTypes";

export const login =
  ({ payload }) =>
  async (dispatch) => {
    console.log(payload);
    try {
      let res = await axios.post("https://busy-jade-pangolin-sock.cyclic.app/auth/login", payload);
      console.log(res.data);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return res.data;
    } catch (error) {
      dispatch({ type: LOGIN_ERROR });
    }
  };

export const resetLogin = () => async (dispatch) => {
  dispatch({ type: LOGIN_RESET });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
