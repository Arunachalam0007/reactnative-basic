import {
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";

import { CATEGORIES } from "../../data/ meals/DummyData";
import CategoryGridTile from "../../components/meals/CategoryGridTile";

// useNavigation hook
import { useNavigation } from "@react-navigation/native";

function MealsCategoriesScreen() {
  const navi = useNavigation();
  function selectedMealCategoryHanlder(category) {
    navi.navigate("MealsInfo", {
      category: category,
    });
  }

  function mealsCategory(dataItem) {
    return (
      <View style={{ flex: 1 }}>
        <CategoryGridTile
          dataItem={dataItem}
          propOnPress={selectedMealCategoryHanlder}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(val) => val.id}
          data={CATEGORIES}
          renderItem={mealsCategory}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default MealsCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
