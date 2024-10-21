import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

function PrimaryTextInputField({
  containerStyle,
  inputFieldStyle,
  keyboardType,
  maxLength,
  placeHolder,
}) {
  return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          placeholder={placeHolder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          style={[styles.inputField, inputFieldStyle]}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputField: {
    borderBottomWidth: 2,
    borderBottomColor: "#c51818",
    textAlign: "center",
    color: "#e6f4ef",
    fontSize: 32,
    marginBottom: 10,
  },
});

export default PrimaryTextInputField;
