import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  authReducer,
  composer(applyMiddleware(thunk))
);
