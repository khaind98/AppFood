import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View
        style={style.viewHome}
      >
        <Text
          style={style.text}
        >
          This is ProfileScreen
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  viewHome: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    marginTop: 400,
    marginLeft: 130,
  }
});