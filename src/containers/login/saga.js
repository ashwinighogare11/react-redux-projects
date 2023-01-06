import { takeEvery, put } from "redux-saga/effects";
import { GET_LOGIN } from "./constants";
import { get } from "../../utils/api";
import { getLoginSuccess, getLoginFail } from "./actions";
import jwt_decode from "jwt-decode";

function* getLogin(params) {
  let data = yield get(
    `/bwserve/v1/token?username=${params.data.username}&password=${params.data.password}`
  )
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const userData = yield JSON.parse(data.data);
    const decodedToken = jwt_decode(userData.seToken);
    localStorage.setItem("token", userData.seToken);
    sessionStorage.setItem("token", userData.seToken);
    localStorage.setItem("exp", decodedToken.exp);
    sessionStorage.setItem("exp", decodedToken.exp);
    yield put(getLoginSuccess(userData));
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } else {
    yield put(getLoginFail(data));
  }
}

function* loginSaga() {
  yield takeEvery(GET_LOGIN, getLogin);
}

export default loginSaga;
