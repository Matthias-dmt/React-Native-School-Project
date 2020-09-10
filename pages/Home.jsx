import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./style";

export const Home = ({ navigation }) => {
  return (
    <View style={(styles.container, styles.around)}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Students")}
      >
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lessons")}
      >
        <Text style={styles.buttonText}>Lessons</Text>
      </TouchableOpacity>
    </View>
  );
};
