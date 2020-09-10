import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./style";

let average = 0;

export const Student = ({
  id,
  name,
  lessons,
  attendance,
  notes,
  navigation,
}) => {
  const averageCalcul = () => {
    notes.map((note) => {
      average = average + note;
    });

    average = average / notes.length;

    return <Text>Average : {average.toFixed(2)}</Text>;
  };

  return (
    <TouchableOpacity
      style={styles.containerStudent}
      onPress={() => navigation.navigate(`Absence`, { id })}
    >
      <View>
        <Image
          source={{ uri: "http://lorempixel.com/100/100/cats/" + id }}
          style={{ width: 100, height: 100, marginRight: 10 }}
        />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>Attendance number(s) : {attendance}</Text>
        <Text>Lessons number(s) : {lessons.length}</Text>
        <Text>{averageCalcul()}</Text>
      </View>
    </TouchableOpacity>
  );
};
