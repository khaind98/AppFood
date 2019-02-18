import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated
} from 'react-native';
import Touchable from 'react-native-platform-touchable';

type Props = {
  item: PropTypes.imageUrl,
  item: PropTypes.name,
  item: PropTypes.Description
}
export default class FlatListRecentComponent extends Component <Props> {
  render() {
    return (
      <View
        style={style.view}
      >
        <Touchable
            {...this.props}
            onPress={() => this.props.navigation.navigate('DetailNewScreen',
            {item: this.props.item}
          )}
        >
          <Animated.View>
            <Image
              source={{uri: this.props.item.imageUrl}}
              style={style.image}
            />
          </Animated.View>
        </Touchable>
        <View
          style={style.viewFlatListItem}
        >
          <Text
            style={style.FlatListItemName}
          >
            {this.props.item.name}
          </Text>
          <Text
            numberOfLines={2}
            style={style.FlatListItemDescription}
          >
            {this.props.item.Description}
          </Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
  viewFlatListItem: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 12
  },
  FlatListItemName: {
    color: '#000000',
    paddingTop: 2,
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 3,
    margin: 5,
  },
  FlatListItemDescription: {
    paddingTop: 2,
    fontSize: 13,
    color: '#A4A4A4',
    marginTop: 5,
  }
});