import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  around: {
    justifyContent: "space-around",
    alignItems: "center",
  },

  flatList: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    width: Dimensions.get("window").width * 0.7,
    paddingHorizontal: 7.5,
    paddingVertical: 15,
    marginVertical: 25,
    backgroundColor: "black",
    borderRadius: 3,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
