import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Home")}>
      <Text>Login</Text>
    </Pressable>
  );
};

export default Login;

const styles = StyleSheet.create({});
