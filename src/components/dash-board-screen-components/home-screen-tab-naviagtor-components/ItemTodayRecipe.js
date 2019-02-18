import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Animated
} from "react-native";
import Touchable from 'react-native-platform-touchable';

type  Props = {
  item: PropTypes.imageUrl,
  item: PropTypes.name
}

class ItemTodayRecipe extends Component <Props> {
  render() {
    return (
      <View>
        {this._itemToday()}
      </View>
    );
  }

  _itemToday() {

    // console.log(this.props.item.imageUrl, this.props.item.name);
    return (
      <View style={style.view}>
        <View style={{flex: 90}}>
          <Touchable
            {...this.props}
            onPress={() => this.props.navigation.navigate('DetailNewScreen',
              {item: this.props.item}
            )}
          >
            <Animated.View>
              <Image
                style={style.image}
                source={{uri: this.props.item.imageUrl}}/>
            </Animated.View>
          </Touchable>
        </View>

        <View style={style.text}>
          <Text>
            {this.props.item.name}
          </Text>
        </View>
      </View>
    )
  }
}


const style = StyleSheet.create({
  view: {
    height: 185,
    width: 120,
    marginLeft: 20,
    borderWidth: 0.4,
    borderColor: '#dddddd',
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0.5, height: 0.5}
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 3,
    resizeMode: 'cover',
  },
  text: {
    flex: 10,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    shadowOpacity: null,
    borderRadius: 0,
    shadowOffset: {width: null, height: null}
  }
});

export default ItemTodayRecipe;