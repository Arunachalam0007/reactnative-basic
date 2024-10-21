import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInputField from "../components/PrimaryTextInputField";

function GameStartScreen({ propsPickedNumber }) {
  const [guessNumber, setguessNumber] = useState("");
  function resetGuessNumber(val) {
    setguessNumber("");
  }
  function confirmBtnHanlder() {
    const chosenNumber = parseInt(guessNumber);

    if (isNaN(chosenNumber) || guessNumber <= 0 || guessNumber > 99) {
      Alert.alert(
        "Invalid Number! ",
        "Number has to be number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetGuessNumber }]
      );
      return;
    }
    propsPickedNumber(chosenNumber);
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View>
          <View style={styles.inputConatiner}>
            <View>
              <PrimaryTextInputField
                inputFieldStyle={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
              />
              <TextInput
                value={guessNumber}
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={(val) => setguessNumber(val)}
              />
            </View>

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton propsOnBtnPress={resetGuessNumber}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton propsOnBtnPress={confirmBtnHanlder}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  inputConatiner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4e0329",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 100,
    borderRadius: 8,
    // box shadow
    elevation: 2,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    height: 50,
    width: 50,
    textAlign: "center",
    color: "#ddb52f",
    fontSize: 32,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
