import { takeEvery, put } from "redux-saga/effects";
import { GET_EDU_NEWS_DATA } from "./constants";
import { get } from "../../utils/api";
import { getEduNewsDataSuccess, getEduNewsDataFail } from "./actions";

function* getNews() {
  let data = yield get("/bwserve/v1/feed/?type=post")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const newsData = yield JSON.parse(data.data);
    yield put(getEduNewsDataSuccess(newsData));
  } else {
    yield put(getEduNewsDataFail(data));
  }
}

function* educationSaga() {
  yield takeEvery(GET_EDU_NEWS_DATA, getNews);
}

export default educationSaga;
