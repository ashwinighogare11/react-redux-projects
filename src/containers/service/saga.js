import { takeEvery, put } from "redux-saga/effects";
import { GET_SERVICE_DATA } from "./constants";
import { get } from "../../utils/api";
import { getServiceDataSuccess, getServiceDataFail } from "./actions";

function* getServices() {
  let data = yield get("/bwserve/v1/feed/?type=post")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const newsData = yield JSON.parse(data.data);
    yield put(getServiceDataSuccess(newsData));
  } else {
    yield put(getServiceDataFail(data));
  }
}

function* serviceSaga() {
  yield takeEvery(GET_SERVICE_DATA, getServices);
}

export default serviceSaga;
