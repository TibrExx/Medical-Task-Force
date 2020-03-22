import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default () =>
  combineReducers<any>({
    auth: authReducer
  });
