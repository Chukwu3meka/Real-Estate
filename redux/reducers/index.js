import { combineReducers } from "redux";

import device from "./device";
import error from "./error";

export default combineReducers({
  device,
  error,
});
