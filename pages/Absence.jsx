import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AbsenceAction } from "../components";
import { SchoolContext } from "../reducer/school";

import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./style";

export const Absence = ({ navigation, route }) => {
  const [state, dispatch] = React.useContext(SchoolContext);

  const { params } = route;

  const student = state.students.find((student) => student.id === params.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <AbsenceAction {...student} />
    </View>
  );
};
