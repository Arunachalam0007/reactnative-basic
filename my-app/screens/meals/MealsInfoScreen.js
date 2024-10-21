import { View, Text, FlatList } from "react-native";
import { MEALS } from "../../data/ meals/DummyData";
import React, { useEffect, useLayoutEffect } from "react";
import MealsInfoItem from "../../components/meals/MealsInfoItem";

import { useNavigation } from "@react-navigation/native";

const MealsInfoScreen = ({ route, navigation }) => {
  const category = route.params.category;
  const navi = useNavigation();

  const mealsInfo = MEALS.filter(
    (mealItems) => mealItems.categoryIds.indexOf(category.id) != -1
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [navigation]);

  function renderMealItem(itemData) {
    const mealsInfoListProp = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    function navigageMealsDetailsHandler(params) {
      console.log("Params value: ", params);
      navi.navigate("MealsDetails", { mealsId: params });
    }
    return (
      <View>
        <MealsInfoItem
          {...mealsInfoListProp}
          propOnPress={navigageMealsDetailsHandler}
        />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={mealsInfo}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsInfoScreen;
