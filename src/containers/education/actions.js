import {GET_EDU_NEWS_DATA, GET_EDU_NEWS_DATA_SUCCESS, GET_EDU_NEWS_DATA_FAIL} from "./constants";

export const getEduNewsData = () => ({
    type: GET_EDU_NEWS_DATA,
  });

  export const getEduNewsDataSuccess = data => ({
    type: GET_EDU_NEWS_DATA_SUCCESS,
    data,
  });

  export const getEduNewsDataFail = data => ({
    type: GET_EDU_NEWS_DATA_FAIL,
    data,
  });

