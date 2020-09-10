import React from "react";
import { styles } from "./style";

import { StyleSheet, Text, View } from "react-native";

export const Lesson = ({ title }) => {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonText}>{title}</Text>
    </View>
  );
};
