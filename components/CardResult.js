import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const CardResult = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => navigation.navigate("Detail")}
      style={{
        width: 335,
        height: 148,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 8,
        backgroundColor: "#EDF3F3",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <View style={{ marginHorizontal: 8, flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: item.img }}
            style={{ width: 119, height: 132 }}
          />
        </View>
        <View style={{ marginLeft: 7, marginTop: 6 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#C8E1DE",
                height: 16,
                borderRadius: 999,
                marginHorizontal: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#208B83",
                  height: 16,
                  paddingHorizontal: 5,
                  marginTop: 2,
                  fontWeight: "700",
                }}
              >
                Top {item.ranking}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#C8E1DE",
                height: 16,
                borderRadius: 999,
                marginHorizontal: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#208B83",
                  height: 16,
                  paddingHorizontal: 5,
                  marginTop: 2,
                  fontWeight: "700",
                }}
              >
                Kinh tế
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#C8E1DE",
                height: 16,
                borderRadius: 999,
                marginHorizontal: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#208B83",
                  height: 16,
                  paddingHorizontal: 5,
                  marginTop: 2,
                  fontWeight: "700",
                }}
              >
                Hà Nội
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#C8E1DE",
                height: 16,
                borderRadius: 999,
                marginHorizontal: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#208B83",
                  height: 16,
                  paddingHorizontal: 5,
                  marginTop: 2,
                  fontWeight: "700",
                }}
              >
                Tag
              </Text>
            </View>
          </View>
          <Pressable onPress={() => navigation.navigate("Detail")}>
            <Text
              style={{
                width: 168,
                marginTop: 8,
                fontWeight: "700",
                color: "#1C6D64",
              }}
            >
              {item.name}
            </Text>
          </Pressable>

          <Text style={{ marginTop: 15, fontSize: 10, color: "#828282" }}>
            Thứ hạng: {item.ranking}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Ionicons name="ios-bookmark" size={24} color="#1C6D64" />
            <Text style={{ fontSize: 10, color: "#828282" }}>15</Text>
          </View>
        </View>
        <View style={{ marginLeft: 2 }}>
          <Feather name="bookmark" size={24} color="#1C6D64" />
        </View>
      </View>
    </Pressable>
  );
};

export default CardResult;

const styles = StyleSheet.create({});
