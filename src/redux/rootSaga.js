import { spawn } from "redux-saga/effects";
import educationSaga from "../containers/education/saga";
import homeSaga from "../containers/home/saga";
import newsSaga from "../containers/news/saga";
import serviceSaga from "../containers/service/saga";
import loginSaga from "../containers/login/saga";

export default function* rootSaga() {
  yield spawn(educationSaga);
  yield spawn(homeSaga);
  yield spawn(newsSaga);
  yield spawn(serviceSaga);
  yield spawn(loginSaga);
}
