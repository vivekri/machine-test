import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import * as strings from '../../utils/strings';

import {connect} from 'react-redux';
import {postLogin} from '../../redux/actions/authAction';
import {useNavigation} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import AppLoader from '../common/component/appLoader';
import WebView from 'react-native-webview';
import {
  AZURE_LOGIN_CHECK_URL,
  AZURE_SAML_LOGIN_URL,
  MATCH_CALL_BACK_URL,
} from '../../utils/const';
import CookieManager from '@react-native-cookies/cookies';
import { Colors } from '../../utils/colors';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    //this.disableSnackbar = this.disableSnackbar.bind(this);
    this.state = {
      isLoading: false,
      isLoadingWebview: false,
      clientIdTokenAzure: '',
      isCallBackUrlAvail: false,
      showAzureView: false,
      isShowErrorSnackbar: false,
      showErrorPopup: false,
      errorMessage: null,
    };

    this.signinResponse = '';
  }

  async componentDidMount() {
    //Orientation.lockToPortrait();
  }
  dismissSnack() {}

  checkAuthentication() {
    /**
     * TODO internet checking
     */
    // CookieManager.clearAll(
    //   parseFloat(DeviceInfo.getSystemVersion()) > 11.0 ? true : false,
    // );
    this.setState({shownNoClinicsPopup: false, showAzureView: true});
    //this.props.navigation.navigate('Home');
  }

  componentWillUnmount() {}

  _handleADToken(e) {
    console.log(e.url);

    if (e.url.toString().includes(AZURE_LOGIN_CHECK_URL)) {
      this.state.clientIdTokenAzure = e.url.toString().split('/')[3];
    }
    if (
      this.state.clientIdTokenAzure != '' &&
      e.url.toString().includes(this.state.clientIdTokenAzure + '/login')
    ) {
      this.timeoutHandle = setTimeout(() => {
        if (!this.state.isCallBackUrlAvail) {
          console.log('***************timeout****************');

          this.setState({showAzureView: false});

          if (
            this.state.isLoading === true &&
            this.state.isShowErrorSnackbar === false
          ) {
            /**
             * TODO error handling
             */
            //this.state.snackbarMessage = 'Login Timeout'
            //this.setState({ isShowErrorSnackbar: true, isLoading: false })
          }
        }
      }, 30000);
    }
    if (!this.state.isCallBackUrlAvail)
      if (e.url.toString().includes(MATCH_CALL_BACK_URL)) {
        clearTimeout(this.timeoutHandle);
        if (e.url.toString().includes('id')) {
          this.setState({
            isLoading: true,
          });
          var id = e.url.toString().split('=')[1].split('&')[0];
          var mail = e.url.toString().split('=')[2];
          this.props.postLogin(id, mail);
          this.state.isCallBackUrlAvail = true;
        } else {
          this.setState({
            isLoading: false,
            showErrorPopup: true,
            errorMessage: e.url.toString().split('=')[2],
          });
          clearTimeout(this.timeoutHandle);

          console.log(
            'error code',
            e.url.toString().split('=')[1].split('&')[0],
          );
          console.log('error msg', e.url.toString().split('=')[2]);
        }
      }
  }

  render() {
    const {auth} = this.props.auth;
    console.log(this.props.auth);

    if (
      this.props.auth.auth != null &&
      this.props.auth.auth.info != null &&
      this.props.auth.auth.info.code == 200
    ) {
      this.props.navigation.navigate('Clinic');
    }

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
      <SafeAreaView
        style={styles.container}
        //onLayout={this.onLayout.bind(this)}
      >
        {this.state.showAzureView === false ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 100, height: 64, resizeMode: 'contain'}}
                source={require('../../assets/img/splash_logo.png')}
              />

              <Text
                style={{
                  width: '100%',
                  fontFamily: 'Roboto-Regular',
                  textAlign: 'center',
                  fontSize: 22,
                  color: Colors.black,
                  marginTop: '6%',
                }}
                allowFontScaling={false}
                maxFontSizeMultiplier={1}>
                {strings.strings.getStarted}
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                height: '50%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
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
                    fontSize: 12,
                    color: Colors.grey,
                    marginTop: '6%',
                  }}
                  allowFontScaling={false}
                  maxFontSizeMultiplier={1}>
                  Use Azure AD credentials
                </Text>

                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '46%',
                    borderRadius: 20,
                    backgroundColor: Colors.primaryColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: '27%',
                    marginTop: 15,
                  }}
                  onPress={() => this.checkAuthentication()}>
                  <Text
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      color: Colors.white,
                      fontFamily: 'Roboto-Regular',
                      fontSize: 14,
                    }}
                    allowFontScaling={false}
                    maxFontSizeMultiplier={1}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>

              <Image
                style={{width: 126, height: 44, resizeMode: 'contain'}}
                source={require('../../assets/img/microsoft.png')}
              />
            </View>
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {this.state.isLoadingWebview ? (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AppLoader />
              </View>
            ) : null}

            <WebView
              //ref="ADLoginView"
              ref={ref => (this.webview = ref)}
              automaticallyAdjustContentInsets={false}
              style={[
                this.props.style,
                {
                  flex: 1,
                  alignSelf: 'stretch',

                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                },
              ]}
              source={{uri: AZURE_SAML_LOGIN_URL}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              onLoadStart={() => this.setState({isLoadingWebview: true})}
              onLoadEnd={() => this.setState({isLoadingWebview: false})}
              cacheEnabled={true}
              decelerationRate="normal"
              javaScriptEnabledAndroid={true}
              onNavigationStateChange={this._handleADToken.bind(this)}
              onShouldStartLoadWithRequest={e => {
                return true;
              }}
              onError={() => {
                this.setState({isLoadingWebview: true}), this.webview.reload();
              }}
              startInLoadingState={true}
              //injectedJavaScript={js}
              scalesPageToFit={false}
              useWebKit={
                parseFloat(DeviceInfo.getSystemVersion()) > 11.0 ? true : false
              }
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {postLogin})(function (props) {
  const navigation = useNavigation();

  return <LoginScreen {...props} navigation={navigation} />;
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

    backgroundColor: Colors.white,
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
