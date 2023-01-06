import { takeEvery, put } from "redux-saga/effects";
import { GET_POSTS_DATA, GET_MEDIA_NEWS_DATA,GET_GEO_DATA, } from "./constants";
import { get } from "../../utils/api";
import {
  getPostsDataSuccess,
  getPostsDataFail,
  getMultimediaDataSuccess,
  getMultimediaDataFail,
  getGeoDataSuccess,
  getGeoDataFail,
} from "./actions";

function* getPosts() {
  let data1 = yield get("/bwserve/v1/feed/?type=post")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data1 && data1.status === 200) {
    const postsData = yield JSON.parse(data1.data);
    yield put(getPostsDataSuccess(postsData));
  } else {
    yield put(getPostsDataFail(data1));
  }
}


function* getMediaNews() {
  let data2 = yield get(
    "/bwserve/v1/feed/?type=news&category=News with Multimedia"
  )
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data2 && data2.status === 200) {
    const postsData = yield JSON.parse(data2.data);
    yield put(getMultimediaDataSuccess(postsData));
  } else {
    yield put(getMultimediaDataFail(data2));
  }
}

function* getGeo() {
  let data = yield get("/bwserve/v1/geocode?address=Pune")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const geoData = yield JSON.parse(data.data);
    yield put(getGeoDataSuccess(geoData.apiResult));
  } else {
    yield put(getGeoDataFail(data));
  }
}
function* homeSaga() {
  yield takeEvery(GET_POSTS_DATA, getPosts);
  yield takeEvery(GET_MEDIA_NEWS_DATA, getMediaNews);
  yield takeEvery(GET_GEO_DATA, getGeo);
}

export default homeSaga;
