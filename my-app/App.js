import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { useState } from "react";

import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import MealsCategoriesScreen from "./screens/meals/MealsCategoriesScreen";
import MealsInfoScreen from "./screens/meals/MealsInfoScreen";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsDetailsScreen from "./screens/meals/MealsDetailsScreen";


import { createDrawerNavigator } from '@react-navigation/drawer';

//Native Stock
const Stack = createNativeStackNavigator();

// Drawer 
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categorires" component={MealsCategoriesScreen} />
      <Drawer.Screen name="Article" component={MealsInfoScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [chosenNumber, setchosenNumber] = useState();

  function pickedNumberHandler(number) {
    setchosenNumber(number);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        // Over all Screen Change settings
        screenOptions={{
          // header text color change
          headerTintColor: "#ffffff",
          // header Background color chagne
          headerStyle: {
            backgroundColor: "#27bccd",
          },
          // Overall screen background change
          contentStyle: {
            backgroundColor: "#3f2f35",
          },
        }}
      >
        <Stack.Screen
          name="MealsCategory"
          component={MyDrawer}
          // Specific Screen Change
          options={{
            title: "Meals Category",
          }}
        />
        <Stack.Screen
          name="MealsInfo"
          component={MealsInfoScreen}
          options={({ route }) => {
            const category = route.params.category;
            return {
              title: category.title,
            };
          }}
        />
        <Stack.Screen name="MealsDetails" component={MealsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
