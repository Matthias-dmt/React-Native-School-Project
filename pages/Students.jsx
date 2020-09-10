import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";

import { Student } from "../components";
import { styles } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SchoolContext } from "../reducer/school";

import { resetAbscence, orderNotes } from "../actions/actions-types";

export const Students = ({ navigation }) => {
  const [state, dispatch] = React.useContext(SchoolContext);

  const ref = React.useRef(null);

  useScrollToTop(ref);

  const renderItem = ({ item }) => {
    const backgroundColor = item.attendance > 5 ? "#6e3b6e" : "#f9c2ff";

    return (
      <Student
        {...item}
        key={item.id}
        navigation={navigation}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <ScrollView ref={ref}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(resetAbscence())}
        >
          <Text style={styles.buttonText}>Reset abscence</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(orderNotes())}
        >
          <Text style={styles.buttonText}>Order notes</Text>
        </TouchableOpacity>

        <SafeAreaView style={styles.flatList}>
          <FlatList
            data={state.students}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
