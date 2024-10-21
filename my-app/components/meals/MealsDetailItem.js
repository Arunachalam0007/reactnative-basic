import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { CATEGORIES, MEALS } from "../../data/ meals/DummyData";

const MealsDetailItem = ({ mealsId }) => {
  const meals = MEALS.filter((item) => item.id === mealsId)[0];
  console.log("Meals: ", meals);
  return (
    <View>
      <View style={styles.innerImageViewContainer}>
        <View>
          <Image
            source={{ uri: meals.imageUrl }}
            style={styles.imageConatiner}
          />
          <Text style={styles.title}>{meals.title}</Text>
        </View>
        <View style={styles.menuNotescontainer}>
          <Text>{meals.duration}mins</Text>
          <Text>{meals.complexity}</Text>
          <Text>{meals.affordability}</Text>
        </View>
        <Text>ingredients</Text>
        {meals.ingredients.map((ingredient) => (
          <Text>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {meals.steps.map((step) => (
          <Text>{step}</Text>
        ))}
      </View>
    </View>
  );
};

export default MealsDetailItem;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    margin: height * 0.025,
    borderRadius: height * 0.01,
    backgroundColor: "#ed8d33",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "#whtie",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
  },
  imageConatiner: {
    width: "100%",
    height: height * 0.3,
  },
  innerImageViewContainer: {
    borderRadius: height * 0.01,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    margin: height * 0.005,
  },
  menuNotescontainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    margin: height * 0.005,
  },
});
