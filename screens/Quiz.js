import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Quiz</Text>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
