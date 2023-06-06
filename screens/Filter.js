import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

const Filter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const nganhhoc = [
    {
      id: 1,
      button: "Xã hội",
    },
    {
      id: 2,
      button: "Kinh tế",
    },
    {
      id: 3,
      button: "Kỹ thuật",
    },
    {
      id: 4,
      button: "Khoa học",
    },
    {
      id: 5,
      button: "Dịch vụ/ nghề",
    },
  ];
  return (
    <View style={{ backgroundColor: "#1C6D64CC", height: "100%" }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 56,
          fontSize: 18,
          color: "white",
          fontWeight: "800",
        }}
      >
        Bộ lọc tìm kiếm
      </Text>
      <View
        style={{ backgroundColor: "#F9F4EE", marginTop: 16, borderRadius: 20 }}
      >
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 44,
            borderBottomWidth: 1,
            borderBottomColor: "#BDBDBD",
            paddingBottom: 18,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "800" }}>Ngành học</Text>
          <View style={styles.container}>
            {nganhhoc.map((item, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <Text style={styles.buttonText}>{item.button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#BDBDBD",
            paddingBottom: 18,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "800" }}>Ngành học</Text>
          <View>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  button: {
    backgroundColor: "#FFBFBD",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#CD2B26",
    fontSize: 12,
    fontWeight: "600",
  },
});
