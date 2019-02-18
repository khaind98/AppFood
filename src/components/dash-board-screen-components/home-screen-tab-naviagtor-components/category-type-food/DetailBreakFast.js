import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from "react-native";

class DetailBreakFast extends Component {
  render() {
    return (
      <View
        style={style.view}
      >
        <Text
          style={style.text}
        >
          This is Screen DetailBreakFast
        </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    marginTop: 350,
    marginLeft: 80,
    fontSize: 14
  }
});

export default DetailBreakFast;