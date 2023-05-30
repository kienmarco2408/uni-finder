import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const DetailScreen = () => {
  return (
    <View style={{ marginTop: 60 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 29,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="#1C6D64" />
        <Ionicons name="bookmark" size={30} color="#1C6D64" />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
