import {AUTH, AUTH_ERROR} from '../types';

import AxiosInstance from '../interceptor'
import {AUTH_TYPE, getURl} from '../api_path'
import * as SharedPreferenceManger from '../../manager/sharedPreference';

export const postLogin = (id,email) => async dispatch => {
  try {
    //const res = await AxiosInstance.get(USER_TYPE+getQuery({"required":1, "minlength":2}))
    const res = await AxiosInstance.post(getURl(AUTH_TYPE),{
      "id": id,
      "mail": email
    })
    SharedPreferenceManger.SharedPreference.setValueKeyStore(SharedPreferenceManger.access_Token,res.headers.authorization)
    dispatch({
      type: AUTH,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: console.log(e),
    });
  }
};
