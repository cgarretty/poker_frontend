import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {chat} from "./reducers";
import stateData from "../data/initialState";

const logger = store => next => action => {
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  // eslint-disable-next-line
  let result = next(action);
  console.log("action", action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["poker-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver, thunk)(createStore)(
    combineReducers({
      chat
    }),
    localStorage["poker-store"]
      ? JSON.parse(localStorage["poker-store"])
      : stateData
  );

export default storeFactory;
