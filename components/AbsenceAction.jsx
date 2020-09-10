import React from "react";
import { increment, decrement } from "../actions/actions-types";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SchoolContext } from "../reducer/school";
import { styles } from "./style";

let average = 0;

export const AbsenceAction = ({ name, attendance, id }) => {
  const [state, dispatch] = React.useContext(SchoolContext);

  return (
    <View style={styles.container}>
      <Text style={styles.absenceText}>
        Attendance of : {name}, number of attendance(s): {attendance}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment(id))}
      >
        <Text style={styles.buttonText}>Increment (+1)</Text>
      </TouchableOpacity>
      {attendance > 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement(id))}
        >
          <Text style={styles.buttonText}>Decrement (-1)</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
