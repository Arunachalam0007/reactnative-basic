import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputTextHandler(val) {
    setGoalText(val);
  }

  function addGoal() {
    console.log("Goal Text:", goalText);
    props.propAddGoal(goalText);
    setGoalText("");
    props.propHideModel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Life Goals!!!"
          onChangeText={goalInputTextHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoal} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    padding: 10,
    marginRight: 8,
    marginLeft: 8,
  },
  buttonContainer: {
    marginRight: 8,
  },
});
