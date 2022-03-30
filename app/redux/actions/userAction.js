import {GET_USERS, USERS_ERROR} from '../types';

import AxiosInstance from '../interceptor'
import {USER_TYPE, getURl,getQuery} from '../api_path'

export const getUsers = () => async dispatch => {
  try {
    //const res = await AxiosInstance.get(USER_TYPE+getQuery({"required":1, "minlength":2}))
    const res = await AxiosInstance.get(USER_TYPE)
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
