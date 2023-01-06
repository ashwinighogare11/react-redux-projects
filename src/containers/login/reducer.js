import produce from "immer";
import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from "./constants";

const initialState = {
  loading: false,
};

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_LOGIN:
        draft.loading = true;
        break;
      case GET_LOGIN_SUCCESS:
        draft.loading = false;
        break;
      case GET_LOGIN_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default loginReducer;
