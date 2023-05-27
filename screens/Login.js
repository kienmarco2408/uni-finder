import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const Login = () => {
  return (
    <View style={{ backgroundColor: "#1C6D64", flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 70 }}>
        <Text style={{ fontSize: 40, fontWeight: "900", color: "#F9F4EE" }}>
          UNIx
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#F9F4EE",
            marginTop: 11,
          }}
        >
          Quote for app
        </Text>
        <Text style={{ marginTop: 61, color: "#F9F4EE", fontSize: 20 }}>
          Tạo tài khoản
        </Text>
        <View style={{ marginTop: 35 }}>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <FontAwesome5
              name="user"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              placeholder="Tên"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Feather
              name="phone"
              size={16}
              color="#888"
              style={{ marginHorizontal: 17 }}
            />
            <TextInput
              placeholder="Số điện thoại"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Feather
              name="mail"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              placeholder="Email"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <AntDesign
              name="lock1"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              placeholder="Mật khẩu"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
              secureTextEntry={true}
            />
            <Feather
              name="eye"
              size={16}
              color="#888"
              style={{ marginRight: 16 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
