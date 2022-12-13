import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(composer(applyMiddleware(thunk)));
