import React, {Component} from 'react';
import {View} from 'react-native';
import ReactNativeNaginator from "./navigation/ReactNativeNaginator";

export default class index extends Component {
  render() {
    return (
      <View
        style={{flex: 1}}
      >
        <ReactNativeNaginator/>
      </View>
    );
  }
};