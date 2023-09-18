import React from "react";
import { Linking, Text, View } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        alignItems: "center",
        maxWidth: "70%",
        maxHeight: "20%",
      }}
    >
      <Text>
        © Copyright 2023 -{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL("https://github.com/AbdourahmaneGadio/")
          }
        >
          GADIO Abdourahmane
        </Text>
      </Text>
      <Text>
        Games's data provided by the{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://rawg.io/apidocs")}
        >
          RAWG API
        </Text>
      </Text>
      <Text>
        Games's settings provided by multiples sources like{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCI8iQa1hv7oV_Z8D35vVuSg"
            )
          }
        >
          Hardware Unboxed
        </Text>
        ,{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCEL03vxCWzPzXcarexAIFHg"
            )
          }
        >
          BenchmarKing
        </Text>
        , ...
      </Text>
    </View>
  );
}
