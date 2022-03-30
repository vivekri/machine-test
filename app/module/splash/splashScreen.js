import React, {Component} from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import * as strings from '../../utils/strings';

import {VERSION_CODE, HARD_RESET_CODE} from '../../utils/const';

import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import VersionCheck from 'react-native-version-check';
import * as SharedPreferenceManager from '../../manager/sharedPreference';
import DialogMobile from '../../library/react-native-simple-dialogs/src/DialogMobile';
import { Colors } from '../../utils/colors';

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      versionDialog: false,
      updateUrl: '',
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  componentWillMount() {
    clearTimeout(this.timeoutHandle);
  }

  async loadData() {
    try {
      this.timeoutHandle = setTimeout(async () => {
        var isLoggedin = await SharedPreferenceManager.SharedPreference.getData(
          SharedPreferenceManager.isLoggin,
        );
          console.log("isLoggedin");
        if (isLoggedin === 'true') {
          if (this.state.versionDialog === false) {
            this.props.navigation.replace('Clinic',);
            //this.props.navigation.replace('Authentication', { from: 'splash' })
          }
        } else {
          this.props.navigation.replace('Login', {action: ''});
        }
      }, 2000);

      //return valsue;
    } catch (error) {
      // Error retrieving data
    }
    let hardResetCode = await SharedPreferenceManager.SharedPreference.getData(
      SharedPreferenceManager.hardResetCode,
    );

    if (hardResetCode === HARD_RESET_CODE) {
    } else {
    }
    VersionCheck.needUpdate().then(async res => {
      console.log('url', res.storeUrl);
      if (true) {
        // true
        this.setState({versionDialog: true, updateUrl: 'url'}); // open store if update is needed.
      } else {
        this._retrieveData();
      }
    });
  }

  componentWillUnmount() {}

  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: '53%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{flex: 1, resizeMode: 'contain'}}
            source={require('../../assets/img/nspc_wallpapper.png')}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{width: 100, height: 64}}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              source={require('../../assets/img/splash_logo.png')}
            />
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '100%',
                fontFamily: 'Roboto-Regular',
                textAlign: 'center',
                fontSize: 16,
                color: Colors.secondaryColor,
              }}
              allowFontScaling={false}
              maxFontSizeMultiplier={1}>
              {strings.strings.treatingPain}
            </Text>
            <Text
              style={{
                width: '100%',
                fontFamily: 'Roboto-Medium',
                textAlign: 'center',
                fontSize: 30,
                color: Colors.secondaryColor,
              }}
              allowFontScaling={false}
              maxFontSizeMultiplier={1}>
              {strings.strings.improvingLives}
            </Text>
          </View>

          <Text
            style={{
              width: '100%',
              fontFamily: 'Roboto-Regular',
              textAlign: 'center',
              fontSize: 12,
              color: Colors.secondaryColor,
            }}
            allowFontScaling={false}
            maxFontSizeMultiplier={1}>
            {VERSION_CODE}
          </Text>
        </View>
        {/* --------------Dialog Start---------------------- */}

        <View>
          <DialogMobile
            visible={this.state.versionDialog}
            dialogStyle={{
              borderRadius: 10,
              borderWidth: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 255,
                backgroundColor: Colors.white,
                borderRadius: 10,
                borderWidth: 0,
                width: '76%',
                marginHorizontal: '12%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text
                style={styles.heading}
                allowFontScaling={false}
                maxFontSizeMultiplier={1}>
                Update Required
              </Text>

              <Text
                style={styles.content}
                allowFontScaling={false}
                maxFontSizeMultiplier={1}>
                {' '}
                Please update to the latest versionto continue using the
                application.{' '}
              </Text>

              <TouchableOpacity
                style={styles.button}
                //onPress = {() => this.setState({showDialog: false})}>
                onPress={() =>
                  Linking.openURL(this.state.updateUrl).catch(err =>
                    console.error('An error occurred', err),
                  )
                }>
                <Text
                  style={styles.buttonText}
                  allowFontScaling={false}
                  maxFontSizeMultiplier={1}>
                  Continue to{' '}
                  {Platform.OS == 'ios' ? 'App Store' : 'Play Store'}
                </Text>
              </TouchableOpacity>
            </View>
          </DialogMobile>
        </View>

        {/* --------------Dialog End------------------------- */}
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {},
)(function (props) {
  const navigation = useNavigation();

  return <SplashScreen {...props} navigation={navigation} />;
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  statusBar: {
    width: '100%',
    height: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  lightBlueView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: Colors.halfwhite,
    justifyContent: 'center',
  },
  darkBlueView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: Colors.primaryColorDark,
    justifyContent: 'space-between',
  },
});
