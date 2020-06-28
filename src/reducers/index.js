import { combineReducers } from "redux";

import convertReducer from "./convertReducer";

const rootReducer = combineReducers({
  conversor: convertReducer
});

export default rootReducer;
