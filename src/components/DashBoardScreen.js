import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './dash-board-screen-components/Home';
import Profile from './dash-board-screen-components/Profile';
import Notify from './dash-board-screen-components/Notify';
import More from './dash-board-screen-components/More';
import {
  createAppContainer,
  createBottomTabNavigator,
}
  from 'react-navigation';

const BottomTabNavigatorScreen = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    More: {
      screen: More
    },
    Notify: {
      screen: Notify
    },
    Profile: {
      screen: Profile
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home': {
            iconName = 'ios-home';
            break;
          }
          case 'Notify': {
            iconName = 'ios-notifications';
            break;
          }
          case 'More': {
            iconName = 'ios-more';
            break;
          }
          case 'Profile': {
            iconName = 'ios-clipboard';
            break;
          }
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>;
      }
    })
  }
);



export default createAppContainer(BottomTabNavigatorScreen);