import { View, Text } from "react-native";
import React from "react";
import MealsDetailItem from "../../components/meals/MealsDetailItem";

const MealsDetailsScreen = ({ route }) => {
  console.log("MealsDeatilsScreens: ", route.params);
  return (
    <View>
      <MealsDetailItem mealsId={route.params.mealsId} />
    </View>
  );
};

export default MealsDetailsScreen;
