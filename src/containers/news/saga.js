import { takeEvery, put } from "redux-saga/effects";
import { GET_NEWS_DATA, GET_AUTOMOTIVE_DATA } from "./constants";
import { get } from "../../utils/api";
import { getNewsDataSuccess, getNewsDataFail, getAutomitiveDataSuccess, getAutomotiveDataFail } from "./actions";

function* getNews() {
  let data = yield get("/bwserve/v1/feed/?type=news")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const newsData = yield JSON.parse(data.data);
    yield put(getNewsDataSuccess(newsData));
  } else {
    yield put(getNewsDataFail(data));
  }
}

function* getAutomotiveNews() {
  let data = yield get(
    "/bwserve/v1/feed/?type=news&category=Automotive"
  )
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const autoData = yield JSON.parse(data.data);
    yield put(getAutomitiveDataSuccess(autoData));
  } else {
    yield put(getAutomotiveDataFail(data));
  }
}


function* newsSaga() {
  yield takeEvery(GET_NEWS_DATA, getNews);
  yield takeEvery(GET_AUTOMOTIVE_DATA, getAutomotiveNews);
}

export default newsSaga;