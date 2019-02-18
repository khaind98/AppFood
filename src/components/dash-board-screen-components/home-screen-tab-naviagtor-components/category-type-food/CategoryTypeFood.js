import React, {Component} from 'react';
import {
  View
} from "react-native";
import BreakFast from "./BreakFast";

class ItemTodayRecipe extends Component {
  render() {
    return (
      <View>
        <BreakFast
          {...this.props}
        />
      </View>
    );
  }
}

export default ItemTodayRecipe;