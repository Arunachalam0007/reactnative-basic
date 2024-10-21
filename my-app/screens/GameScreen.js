import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";

function GameScreen() {
  return (
    <SafeAreaView style={styles.rootConatainer}>
      <View style={styles.rootConatainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textCom}>Opponent's Guess</Text>
        </View>
        <View style={styles.textNumContainer}>
          <Text style={styles.textNumCom}>41</Text>
        </View>
        <View style={styles.operationContainer}>
          <View>
            <Text style={styles.opeartionText}>Higher or Lower?</Text>
          </View>
          <View style={styles.operationBtnContainer}>
            <View style={styles.operationBtn}>
              <PrimaryButton>
                <Ionicons name="md-remove" size={22} />
              </PrimaryButton>
            </View>
            <View style={styles.operationBtn}>
              <PrimaryButton>
                {" "}
                <Ionicons name="md-add" size={22} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootConatainer: {
    flex: 1,
    //padding: 10,
  },
  textContainer: {
    borderWidth: 5,
    borderColor: "white",
    margin: 20,
    padding: 10,
  },
  textCom: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    // padding: 10,
  },
  textNumContainer: {
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "#d6a125",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    margin: 24,
  },
  textNumCom: {
    fontSize: 30,
    textAlign: "center",
    color: "#d6a125",

    // padding: 10,
  },
  operationContainer: {
    backgroundColor: "#4e0329",
    padding: 20,
    margin: 40,
    borderRadius: 20,
  },
  opeartionText: {
    fontSize: 22,
    textAlign: "center",
    color: "#d6a125",
    marginBottom: 20,
  },
  operationBtnContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  operationBtn: {
    flex: 1,
  },
});
