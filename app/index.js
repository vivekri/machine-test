import 'react-native-gesture-handler';
import * as React from 'react';
import {AppState, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import store from './redux/store';
import LoginController from './module/login/loginController';
import SplashController from './module/splash/splashController'
import HomeTabs from './module/mainpage/dashBoardBottomMenu';
import ClinicController from './module/clinic/clinicController';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashController}
        options={{headerShown: false}}
      />
      
      
    </Stack.Navigator>
  );
}

const initialState = {
  users: [],
  loading: true,
};

export default function App(state = initialState) {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current,
  );

  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };
  return (
    
    <Provider store={store}>
      <NavigationContainer>
      <View style={{ flex: 1 }}>
        <MyStack />
        
    </View>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    paddingBottom: 2,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tabIcon: {
    width: 20,
    aspectRatio: 1,
  },
});
