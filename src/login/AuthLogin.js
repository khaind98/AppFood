import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DashBoardLogin from '../components/DashBoardLogin';

export default class AuthLogin extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.viewBackground}>
        <DashBoardLogin
          {...this.props}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  viewBackground: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});