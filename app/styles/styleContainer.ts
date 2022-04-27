import { StyleSheet } from "react-native";

export const styleContainer = StyleSheet.create({
  accueilcontainer: {
    //boutons
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
    margin: 10,
  },

  main_container: {
    height: 70,
    flexDirection: "row",
    margin: 15,
    alignContent: "center",
    backgroundColor: "#4B0082",
    opacity: 0.5,
    padding: 10,
    borderRadius: 20,
  },

  header: {
    backgroundColor: "#4B0082",
  },
  infoExo_container: {
    width: 350,
    height: 100,
    margin: 30,
    borderRadius: 20,
    opacity: 0.6,
    backgroundColor: "#4B0082",
    padding: 5,
  },

  description_container: {
    flex: 7,
  },

  musicontainer: {
    backgroundColor: "lightgrey",
    borderRadius: 20,
    margin: 10,
  },

  pascontainer: {
    backgroundColor: "mediumpurple",
    opacity: 0.4,
    borderRadius: 20,
    margin: 10,
  },

  pasItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  pasM_container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 5,
    margin: 10,
  },

  mainmodifier_container: {
    flex: 1,
    marginTop: 30,
  },

  exercice: {
    backgroundColor: "lavender",
  },
});
