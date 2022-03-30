import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HARD_RESET_CODE} from '../utils/const';

export const access_Token = 'access_token';
export const isLoggin = 'is_loggin';
export const hardResetCode = 'hard_reset_code';
export const clinics = 'clinics';
export const ADGroups = 'AD_groups';
export const groups = 'groups';
export const email = 'email';
export const OMRegionList = 'OM_region_list';
export const displayName = 'display_name';
export const isProvider = 'is_provider';
export const view ='view';

export class SharedPreference {
  static async getValueKeyStore(whatToFetch) {
    try {
      return await RNSecureKeyStore.get(whatToFetch).then(
        res => {
          return res;
        },
        err => {},
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  static async setValueKeyStore(whatToFetch, value) {
    try {
      await RNSecureKeyStore.set(whatToFetch, value, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      }).then(
        res => {
          console.log('resss', res);
        },
        err => {
          console.log('errr', err);
        },
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  static storeData = async (whatToFetch, value) => {
    try {
      await AsyncStorage.setItem(whatToFetch, value);
    } catch (e) {
      console.log('error', error);
    }
  };

  static getData = async (whatToFetch) => {
    try {
      const value = await AsyncStorage.getItem(whatToFetch);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  static async clearAllStorage() {
    AsyncStorage.clear();
    await this.setSharedPreferenceValues(hardresetCode, HARD_RESET_CODE);
  }
}
