import React, { useState } from "react";
import { Animated, Button, PanResponder, StyleSheet, View } from "react-native";

let contin = 1;

let value = new Animated.Value(0);

// let panResponder = PanResponder.create({
//   onMoveShouldSetPanResponder: (evt, gestureState) => true,
//   onPanResponderGrant: () => {
//     pan.setOffset({
//       x: pan.x._value,
//       y: pan.y._value
//     });
//   },
//   onPanResponderMove: Animated.event(
//     [
//       null,
//       { dx: pan.x, dy: pan.y }
//     ]
//   ),
//   onPanResponderRelease: () => {
//     console.log({...pan.x});
//     pan.flattenOffset();
//     console.log({...pan.x});
//   }
// })

let valueTiming = () => {
  Animated.loop(
    Animated.spring(value, {
      toValue: -100,
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    })
  ).start();
};

function App(props) {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.ball, transform: [
          {translateY: value}
        ]}}
      />
      <Button title="Move" onPress={() => {valueTiming()}} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ball: {
    backgroundColor: "grey",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    margin: 15,
  },
});
