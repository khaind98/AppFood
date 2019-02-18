import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class More extends Component {
  render() {
    return (
      <View
        style={style.ViewHome}
      >
        <Text
          style={style.text}
        >
          This is MoreScreen
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  ViewHome: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    marginTop: 400,
    marginLeft: 130,
  }

});