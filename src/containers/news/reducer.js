import produce from "immer";

import {
  GET_NEWS_DATA,
  GET_NEWS_DATA_SUCCESS,
  GET_NEWS_DATA_FAIL,
  GET_AUTOMOTIVE_DATA,
  GET_AUTOMOTIVE_DATA_SUCCESS,
  GET_AUTOMOTIVE_DATA_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  newsData: [],
  automotiveData: [],
};

const newsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_NEWS_DATA:
        draft.loading = true;
        break;
      case GET_NEWS_DATA_SUCCESS:
        draft.loading = false;
        draft.newsData = action.data;
        break;
      case GET_NEWS_DATA_FAIL:
        draft.loading = false;
        break;
      case GET_AUTOMOTIVE_DATA:
        draft.loading = true;
        break;
      case GET_AUTOMOTIVE_DATA_SUCCESS:
        draft.loading = false;
        draft.automotiveData = action.data;
        break;
      case GET_AUTOMOTIVE_DATA_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default newsReducer;
