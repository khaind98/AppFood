import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import Button from 'react-native-button';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DetailNew extends Component {

  render() {
    console.log('DetailNew', this.props);
    return (
      <View
        style={style.view}
      >
        <ScrollView>
        <View
         style={{flex: 60}}
        >
          <View>
            <Ionicons name="ios-arrow"></Ionicons>
          </View>
          <Image
            source={{uri: this.props.navigation.state.params.item.imageUrl}}
            style={style.image}
          />
        </View>
        <View
          style={{flex: 30}}
        >
            <Text
              style={style.text}
            >
              {this.props.navigation.state.params.item.name}
            </Text>
            <Text
              style={style.Description}
            >
              {this.props.navigation.state.params.item.Description}
            </Text>
        </View>
        <View
          style={{flex: 10}}
        >
        </View>
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#000000',
    marginTop: 42,
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 16,
    fontSize: 20
  },
  image: {
    flex: 1,
    marginTop: 0,
    resizeMode: 'cover',
    height: 400,
    width: null
  },
  Description: {
    color: '#000000',
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 35,
    backgroundColor: '#ffffff',
    fontSize: 12.5
  },
  button: {
    marginTop: 10,
    marginRight: 280,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 13
  }
});