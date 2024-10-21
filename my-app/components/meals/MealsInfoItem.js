import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

const MealsInfoItem = ({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  propOnPress,
}) => {
  console.log("ID prop Value: ", id);
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={propOnPress.bind(this, id)}
      >
        <View style={styles.innerImageViewContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.imageConatiner} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.menuNotescontainer}>
            <Text>{duration}mins</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealsInfoItem;

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
