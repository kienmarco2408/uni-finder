import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import CardResult from "../components/CardResult";
import { uni_list } from "../data";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../CardReducer";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const card = useSelector((state) => state.card.card);
  const dispatch = useDispatch();
  useEffect(() => {
    if (card.length > 0) return;
    const fetchProducts = async () => {
      const colRef = collection(db, "uni_list");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((card) => dispatch(getProducts(card)));
    };
    fetchProducts();
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#1C6D64", height: 241 }}>
      <View
        style={{
          marginTop: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            borderRadius: 8,
            width: 42,
            height: 42,
            backgroundColor: "#208B83",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="menu" size={16} color="white" />
        </TouchableOpacity>
        <View>
          <Image
            source={require("../storages/avt.png")}
            style={{ width: 42, height: 42, borderRadius: 8 }}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
          Xin chào Minh Tiệp!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontWeight: "700",
            width: 288,
            marginTop: 10,
          }}
        >
          Tìm kiếm trường Đại Học phù hợp nhất với bạn!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F9F4EE",
          width: "100%",
          height: 127,
          marginTop: 20,
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View
          style={{
            marginTop: 16,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <View
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#CD2B26",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="sound-mix" size={18} color="white" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#828282", fontSize: 10 }}>
            20 trường phù hợp
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="swap-vert" size={16} color="#EB9629" />
            <Text style={{ fontSize: 10, color: "#EB9629" }}>Sắp xếp</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              borderColor: "#7BB9B4",
              height: 22,
              borderRadius: 6,
              marginHorizontal: 2,
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#7BB9B4",
                paddingHorizontal: 10,
                fontWeight: "500",
              }}
            >
              Tag
            </Text>
          </View>
          <View
            style={{
              borderColor: "#7BB9B4",
              height: 22,
              borderRadius: 6,
              marginHorizontal: 2,
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#7BB9B4",
                paddingHorizontal: 10,
                fontWeight: "500",
              }}
            >
              Tag
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: 28,
        }}
      >
        {card.map((item, index) => (
          <CardResult key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
