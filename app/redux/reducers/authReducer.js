import * as SharedPreferenceManager from '../../manager/sharedPreference';
import {AUTH} from '../types';

const initialState = {
  auth: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      if (action.payload != null && action.payload.info.code == 200) {
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.ADGroups,
          JSON.stringify(action.payload.result.AD_groups),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.OMRegionList,
          JSON.stringify(action.payload.result.OM_region_list),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.clinics,
          JSON.stringify(action.payload.result.clinic),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.displayName,
          JSON.stringify(action.payload.result.display_name),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.groups,
          JSON.stringify(action.payload.result.groups),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.isProvider,
          JSON.stringify(action.payload.result.isProvider),
        );
        SharedPreferenceManager.SharedPreference.setValueKeyStore(
          SharedPreferenceManager.view,
          JSON.stringify(action.payload.result.view),
        );
        // SharedPreferenceManager.SharedPreference.storeData(
        //   SharedPreferenceManager.isLoggin,
        //   JSON.stringify(true),
        // );
        
      }
      return {
        ...state,
        auth: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
