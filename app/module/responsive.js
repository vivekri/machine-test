import {Dimensions} from 'react-native';

export function isMobile() {
  return Dimensions.get('window').width < 850;
}

export function isTablet() {
  return (
    Dimensions.get('window').width >= 850 &&
    Dimensions.get('window').width <= 1100
  );
}

export function isWeb() {
  return Dimensions.get('window').width > 1100;
}
