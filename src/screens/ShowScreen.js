import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text> {blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
