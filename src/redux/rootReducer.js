import { combineReducers } from "redux";

import educationReducer from "../containers/education/reducer";
import homeReducer from "../containers/home/reducer";
import newsReducer from "../containers/news/reducer";
import serviceReducer from "../containers/service/reducer";
import loginReducer from "../containers/login/reducer";

export default combineReducers({
  educationReducer,
  homeReducer,
  newsReducer,
  serviceReducer,
  loginReducer,
});
