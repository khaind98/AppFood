import React, {Component} from 'react';
import {
  View,
  AsyncStorage,
  StyleSheet,
  Text,
} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation'

import DashBoardScreen from '../components/DashBoardScreen.js';
import AuthLogin from '../login/AuthLogin.js';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'DashBoardScreen' : 'DashBoardLogin');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          FoodApp
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080FF',
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
  }
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingScreen
    },
    DashBoardLogin: {
      screen: AuthLogin
    },
    DashBoardScreen: {
      screen: DashBoardScreen
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const App = createAppContainer(AppSwitchNavigator);

export default App;