import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalContainer}>
      <Pressable
        //  android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.propDelete.bind(this, props.itemData.item)}
      >
        <Text style={{ color: "white" }}>{props.itemData.item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#5e0acc",
    padding: 5,
    margin: 5,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
