import produce from "immer";

import {
  GET_POSTS_DATA,
  GET_POSTS_DATA_SUCCESS,
  GET_POSTS_DATA_FAIL,
  GET_MEDIA_NEWS_DATA,
  GET_MEDIA_NEWS_DATA_SUCCESS,
  GET_MEDIA_NEWS_DATA_FAIL,
  GET_GEO_DATA,
  GET_GEO_DATA_SUCCESS,
  GET_GEO_DATA_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  postsData: [],
  multimediaData: [],
  geoData: [],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POSTS_DATA:
        draft.loading = true;
        break;
      case GET_POSTS_DATA_SUCCESS:
        draft.loading = false;
        draft.postsData = action.data;
        break;
      case GET_POSTS_DATA_FAIL:
        draft.loading = false;
        break;
      case GET_MEDIA_NEWS_DATA:
        draft.loading = true;
        break;
      case GET_MEDIA_NEWS_DATA_SUCCESS:
        draft.loading = false;
        draft.multimediaData = action.data;
        break;
      case GET_MEDIA_NEWS_DATA_FAIL:
        draft.loading = false;
        break;
        case GET_GEO_DATA:
        draft.loading = true;
        break;
      case GET_GEO_DATA_SUCCESS:
        draft.loading = false;
        draft.geoData = action.data;
        break;
      case GET_GEO_DATA_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default homeReducer;
