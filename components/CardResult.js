import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardResult = () => {
  return (
    <View
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
      }}
    >
      <View style={{ marginHorizontal: 8, flexDirection: "row" }}>
        <View>
          <Image
            source={require("../storages/logoschool.png")}
            style={{ width: 119, height: 132 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 6 }}>
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
                Top 2
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
          <View>
            <Text>Trường Đại học Kinh tế Quốc dân Hà Nội</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardResult;

const styles = StyleSheet.create({});
