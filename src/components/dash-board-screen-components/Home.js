import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import FlattListRecentComponent from "./home-screen-tab-naviagtor-components/FlastListRecentComponent";
import ReactViewData from '../../api/RecentViewData';
import TodayRecipeComponent from "./home-screen-tab-naviagtor-components/TodayRecipeComponent";
import DetailNew from './home-screen-tab-naviagtor-components/DetailNew';
import DetailBreakFast from  './home-screen-tab-naviagtor-components/category-type-food/DetailBreakFast'
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={style.viewHome}
      >
        <Text
          style={style.todayRecipe}
        >
          Today Recipe
        </Text>
        <View
          style={style.viewTodayRecipe}
        >
          <TodayRecipeComponent
            {...this.props}
          />
        </View>
        <Text
          style={style.recentView}
        >
          Recent View
        </Text>
        <View
          style={style.viewRecent}
        >
          <FlatList
            data={ReactViewData}
            renderItem={({item, index}) => {
              return (
                <FlattListRecentComponent
                  {...this.props}
                  item={item}
                  index={index}
                />)
             }
            }
          />
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  viewHome: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  viewRecent: {
    flex: 50
  },
  viewTodayRecipe: {
    flex: 50
  },
  recentView: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 6,
    marginLeft: 12,
    fontSize: 18
  },
  todayRecipe: {
    marginTop: 60,
    marginRight: 10,
    marginBottom: 6,
    marginLeft: 12,
    fontSize: 18
  }
});

const DetailScreen = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null
      }),
    },
    DetailNewScreen :{
      screen: DetailNew,
      navigationOptions: () => ({
        header: null
      }),
    },
    DetailBreakFast: {
      screen: DetailBreakFast
    }
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

export default createAppContainer(DetailScreen)