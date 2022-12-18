import { CURRENT_USER } from "./auth.types";

export const login = (user) => (dispatch) => {
  dispatch({ type: CURRENT_USER, payload: user });
};
