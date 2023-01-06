import {
  GET_POSTS_DATA,
  GET_POSTS_DATA_FAIL,
  GET_POSTS_DATA_SUCCESS,
  GET_MEDIA_NEWS_DATA,
  GET_MEDIA_NEWS_DATA_SUCCESS,
  GET_MEDIA_NEWS_DATA_FAIL,
  GET_GEO_DATA,
  GET_GEO_DATA_FAIL,
  GET_GEO_DATA_SUCCESS,
} from "./constants";



export const getGeoData = () => ({
  type: GET_GEO_DATA,
});

export const getGeoDataSuccess = (data) => ({
  type: GET_GEO_DATA_SUCCESS,
  data,
});

export const getGeoDataFail = (data) => ({
  type: GET_GEO_DATA_FAIL,
  data,
});
export const getPostsData = () => ({
  type: GET_POSTS_DATA,
});

export const getPostsDataSuccess = (data) => ({
  type: GET_POSTS_DATA_SUCCESS,
  data,
});

export const getPostsDataFail = (data) => ({
  type: GET_POSTS_DATA_FAIL,
  data,
});

export const getMultimediaData = () => ({
  type: GET_MEDIA_NEWS_DATA,
});

export const getMultimediaDataSuccess = (data) => ({
  type: GET_MEDIA_NEWS_DATA_SUCCESS,
  data,
});

export const getMultimediaDataFail = (data) => ({
  type: GET_MEDIA_NEWS_DATA_FAIL,
  data,
});
