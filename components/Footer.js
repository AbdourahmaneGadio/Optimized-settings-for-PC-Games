import React from "react";
import { Linking, Text, View } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        alignItems: "center",
        maxWidth: "70%",
        maxHeight:"20%"
      }}
    >
      <Text
        onPress={() => Linking.openURL("https://github.com/AbdourahmaneGadio/")}
      >
        © Copyright 2023 - GADIO Abdourahmane
      </Text>
      <Text onPress={() => Linking.openURL("https://rawg.io/")}>
        Games's data provided by the RAWG API
      </Text>
      <Text>
        Games's settings provided by multiples sources like Hardware Unboxed,
        BenchmarKing, ...
      </Text>
    </View>
  );
}
