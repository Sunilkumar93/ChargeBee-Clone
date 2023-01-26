import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./LoginRedux/Login.Reducer";
import signupReducer from "./SignupRedux/Signup.Reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: LoginReducer,
});

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);

export { store };
