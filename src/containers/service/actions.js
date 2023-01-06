import {GET_SERVICE_DATA, GET_SERVICE_DATA_SUCCESS, GET_SERVICE_DATA_FAIL} from "./constants";

export const getServiceData = () => ({
    type: GET_SERVICE_DATA,
  });

  export const getServiceDataSuccess = data => ({
    type: GET_SERVICE_DATA_SUCCESS,
    data,
  });

  export const getServiceDataFail = data => ({
    type: GET_SERVICE_DATA_FAIL,
    data,
  });

