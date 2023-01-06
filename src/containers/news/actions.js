import {
  GET_NEWS_DATA,
  GET_NEWS_DATA_SUCCESS,
  GET_NEWS_DATA_FAIL,
  GET_AUTOMOTIVE_DATA,
  GET_AUTOMOTIVE_DATA_SUCCESS,
  GET_AUTOMOTIVE_DATA_FAIL,
} from "./constants";

export const getNewsData = () => ({
  type: GET_NEWS_DATA,
});

export const getNewsDataSuccess = (data) => ({
  type: GET_NEWS_DATA_SUCCESS,
  data,
});

export const getNewsDataFail = (data) => ({
  type: GET_NEWS_DATA_FAIL,
  data,
});

export const getAutomotiveData = () => ({
  type: GET_AUTOMOTIVE_DATA,
});

export const getAutomitiveDataSuccess = (data) => ({
  type: GET_AUTOMOTIVE_DATA_SUCCESS,
  data,
});

export const getAutomotiveDataFail = (data) => ({
  type: GET_AUTOMOTIVE_DATA_FAIL,
  data,
});
