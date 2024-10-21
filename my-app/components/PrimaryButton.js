import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, propsOnBtnPress }) {
  function pressHandler(params) {
    propsOnBtnPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedItem]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.5,
  },

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 2,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
