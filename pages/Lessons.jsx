import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Lesson } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

import { SchoolContext } from "../reducer/school";

export const Lessons = ({ navigation }) => {
  const [state, dispatch] = React.useContext(SchoolContext);

  const { lessons } = state;

  const renderItem = ({ item }) => {
    const backgroundColor = item.attendance > 5 ? "#6e3b6e" : "#f9c2ff";

    return <Lesson {...item} key={item.id} style={{ backgroundColor }} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.flatList}>
        <FlatList
          data={lessons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
