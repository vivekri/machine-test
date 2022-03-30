import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CheckConnection from '../../utils/checkConnection';
import Profile from './profile/profile';
import Catlog from './catlog/catlog';
import DashBoardController from './dashboard/dashboardController';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  let network = CheckConnection();
  if (network === false) {
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashBoardController}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('assets/Home_tab_icon.png')}
                style={styles.tabIcon}
              />
            </View>
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('assets/Profile_icon.png')}
                style={styles.tabIcon}
              />
            </View>
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Catlog"
        component={Catlog}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('assets/Last_tab_icon.png')}
                style={styles.tabIcon}
              />
            </View>
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
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
