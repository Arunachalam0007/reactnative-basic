import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { useState } from "react";

import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

export default function GoalsScreen() {
  const [goalsList, setGoalsList] = useState([]);
  const [showAddGoalModel, setShowAddGoalModel] = useState(false);

  function addGoalHandler(val) {
    if (val != "" && val != " ") setGoalsList([...goalsList, val]);
  }

  function deleteGoalHandler(val) {
    setGoalsList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal !== val);
    });
  }

  function showGoalModel(params) {
    setShowAddGoalModel(true);
  }

  function hideGoalModel(params) {
    setShowAddGoalModel(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={showGoalModel}></Button>
      {showAddGoalModel && (
        <GoalInput
          visible={showAddGoalModel}
          propHideModel={hideGoalModel}
          propAddGoal={addGoalHandler}
        ></GoalInput>
      )}

      <View style={styles.listOfGoalsContainer}>
        <Text style={{ textAlign: "center", color: "red", fontSize: 20 }}>
          Goals List
        </Text>
        <FlatList
          data={goalsList}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                propDelete={deleteGoalHandler}
                //  id = {itemData.index}
                itemData={itemData}
              ></GoalItem>
            );
          }}
        />

        {/* <ScrollView alwaysBounceVertical={false} >
          {goalsList.map((goal) => (
            <View style={styles.goalContainer} key={goal}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  listOfGoalsContainer: {
    flex: 3,
  },
});
