import * as SharedPreferenceManager from '../../manager/sharedPreference';
import {AUTH} from '../types';

const initialState = {
  auth: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
