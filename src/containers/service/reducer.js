import produce from "immer";

import {
  GET_SERVICE_DATA,
  GET_SERVICE_DATA_SUCCESS,
  GET_SERVICE_DATA_FAIL,
} from "./constants";

const initialState = {
  loading: false,
};

const serviceReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_SERVICE_DATA:
        draft.loading = true;
        break;
      case GET_SERVICE_DATA_SUCCESS:
        draft.loading = false;       
        break;
      case GET_SERVICE_DATA_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default serviceReducer;
