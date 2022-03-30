// ES6 module syntax
//import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export function setLocalLanguage() {
  strings.setLanguage('en-US');
}

export const strings = {
  getStarted: "Let's get started"
};
