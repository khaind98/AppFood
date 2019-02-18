import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import Touchable from 'react-native-platform-touchable';

export default class BreakFast extends Component {
  render() {

    return (
      <View>
        {this._itemToday()}
      </View>
    );
  }

  _itemToday() {
    let color;
    let name;
    let id = this.props.item.id;
    switch (id) {
      case  id : {
        color = this.props.item.color;
        name = this.props.item.name
      }
        return (
          <View style={[style.view, {backgroundColor: color}]}>
            <Touchable
              onPress={() => this.props.navigation.navigate('DetailBreakFast')}
            >
              <View>
                <Text
                  style={style.text}
                >
                  {name}
                </Text>
              </View>
            </Touchable>
          </View>
        )
     }
  }
}

const style = StyleSheet.create({
  view: {
    marginTop: 8,
    backgroundColor: 'hsla(9, 100%, 64%, 1)',
    height: 60,
    width: 120,
    marginLeft: 20,
    borderWidth: 0.4,
    borderColor: '#ffffff',
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0.5, height: 0.5}
  },
  text: {
    alignItems: 'center',
    marginLeft: 27,
    marginBottom: 10,
    marginTop: 18,
    marginRight: 10,
    color: '#ffffff',
    fontSize: 14
  }
});