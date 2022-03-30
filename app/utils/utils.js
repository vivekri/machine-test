import {Dimensions, Platform, PixelRatio} from 'react-native';
import Snackbar from 'react-native-snackbar';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthScale = SCREEN_WIDTH / 375;

/**
 * pixelNormalize() : Used to handle a responsive font size, length, etc...
 * Provides a value irrespective of aspect ratio and screen resolution
 * @param {*} size
 */
export function pixelNormalize(size) {
  const newSize = size * widthScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * heightNormalize() : Used to handle a responsive item height,
 * Provides a value irrespective of aspect ratio and screen resolution
 * @param {*} size
 */
export function heightNormalize(size) {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof size === 'number' ? size : parseFloat(size);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
}

/**
 * snackBarIndefinite() : Used to handle a snackBar Indefinite,
 * Provides a snack bar with action button
 * @param {*} message
 * @param {*} action
 * @param {*} color
 * @param {*} actionColor
 * @param {*} actionFun
 */
export function snackBarIndefinite(
  message,
  action,
  color,
  actionColor,
  actionFun,
) {
  return Snackbar.show({
    text: message,
    textColor: actionColor,
    backgroundColor: color,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: action,
      textColor: actionColor,
      onPress: () => {
        //actionFun();
      },
    },
  });
}

/**
 * snackBarAutoDismiss() : Used to handle a snackBar Indefinite,
 * Provides a snack bar with action button
 * @param {*} message
 * @param {*} action
 * @param {*} color
 * @param {*} actionColor
 * @param {*} actionFun
 */
export function snackBarAutoDismiss(
  message,
  action,
  color,
  actionColor,
  actionFun,
) {
  return Snackbar.show({
    text: message,
    color: actionColor,
    backgroundColor: color,
    duration: Snackbar.LENGTH_LONG,
    action: {
      text: action,
      textColor: actionColor,
      onPress: () => {
        actionFun();
      },
    },
  });
}
