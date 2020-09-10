import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Home, Students, Absence, Lessons } from "./pages";

import { SchoolProvider } from "./reducer/school";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SchoolProvider>
      <NavigationContainer>
        <Stack.Navigator style={styles.container} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Students" component={Students} />
          <Stack.Screen name="Absence" component={Absence} />
          <Stack.Screen name="Lessons" component={Lessons} />
        </Stack.Navigator>
      </NavigationContainer>
    </SchoolProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
