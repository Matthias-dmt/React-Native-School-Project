import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  containerStudent: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.75,
    justifyContent: "space-around",
    marginVertical: 25,
    paddingRight: 20,
    alignItems: "center",
    backgroundColor: "#CE9079",
    color: "white",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  flatList: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lesson: {
    width: Dimensions.get("window").width * 0.75,
    backgroundColor: "#29518D",
    marginBottom: 5,
  },

  lessonText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
    color: "white",
  },

  button: {
    width: Dimensions.get("window").width * 0.7,
    paddingHorizontal: 7.5,
    paddingVertical: 15,
    marginTop: 10,
    backgroundColor: "black",
    borderRadius: 3,
  },

  absenceText: {
    marginBottom: 20,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
