import produce from "immer";

import {
  GET_EDU_NEWS_DATA,
  GET_EDU_NEWS_DATA_SUCCESS,
  GET_EDU_NEWS_DATA_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  newsData: [],
};

const educationReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_EDU_NEWS_DATA:
        draft.loading = true;
        break;
      case GET_EDU_NEWS_DATA_SUCCESS:
        draft.loading = false;
        draft.newsData = action.data;
        break;
      case GET_EDU_NEWS_DATA_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default educationReducer;
