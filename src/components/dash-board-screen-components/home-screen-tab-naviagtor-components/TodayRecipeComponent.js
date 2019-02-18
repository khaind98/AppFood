import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import ItemTodayRecipe from "./ItemTodayRecipe";
import TodayRecipeData from "../../../api/TodayRecipeData";
import CategoryTypeFood from './category-type-food/CategoryTypeFood';
import CatogaryItem from  "../../../api/CatogaryItem";

export default class TodayRecipeComponent extends Component {
  render() {
    return (
      <View style={style.viewCategory}>
        <View style={{flex: 70}} >
          <ScrollView
            scrollEventThrottle={4}
            horizontal={true}
          >
              {this._renderTodayRecipe()}
          </ScrollView>
        </View>

        <View style={{flex: 30}}>
          <ScrollView
            scrollEventThrottle={4}
            horizontal={true}
          >
            {this._renderCategoryTypeFood()}
          </ScrollView>
        </View>

      </View>
    )
  }

  _renderCategoryTypeFood() {
    const item = CatogaryItem;
    return item.map((value, index) => {
        return <View
          style={style.view}
          key={index}
        >
          <View>
            <CategoryTypeFood
              {...this.props}
              item={value}
            />
          </View>
        </View>
      }
    )
  }
  _renderTodayRecipe() {
    const item = TodayRecipeData;
    return item.map((value, index) => {
        return <View
          style={style.view}
          key={index}
        >
          <View>
            <ItemTodayRecipe
              {...this.props}
              item={value}
            />
          </View>
        </View>
      }
    )
  }
}

const style = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
  },
  viewCategory: {
    flex: 1,
    marginTop: 8,
  },
});