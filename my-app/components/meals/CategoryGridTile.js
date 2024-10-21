import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";

const CategoryGridTile = ({ dataItem, propOnPress }) => {
  return (
    <View style={[styles.rootConatiner]}>
      <Pressable
        style={({ pressed }) => [
          styles.categoryPressable,
          pressed ? styles.categoryPressed : null,
        ]}
        android_ripple={{ color: "Grey" }}
        onPress={propOnPress.bind(this, dataItem.item)}
        onPre
      >
        <View
          style={[
            styles.innerCategoryViewContainer,
            { backgroundColor: dataItem.item.color },
          ]}
        >
          <Text style={styles.categoryText}>{dataItem.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    margin: 16,
    height: height * 0.15,
    borderRadius: height * 0.008,
    elevation: 8,
    backgroundColor: "white",
    shadowColor: "#c40e0e",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  categoryPressable: {
    flex: 1,
    borderRadius: height * 0.008,
  },
  categoryPressed: {
    opacity: 0.5,
    borderRadius: height * 0.008,
  },
  innerCategoryViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: height * 0.008,
  },
  categoryText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
