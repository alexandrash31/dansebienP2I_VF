import { StyleSheet } from "react-native";

export const styleBoutons = StyleSheet.create({
  buttonEnregister: {
    backgroundColor: "#4B0082",
    borderRadius: 30,
    marginBottom: 20,
    width: "70%",
    alignSelf: "center",
  },

  buttonContainer: {
    //bouton
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  buttonCreer: { backgroundColor: "#4B0082" },

  headerContainer: {
    color: "#4B0082",
  },

  infoExo_container: {
    width: 350,
    height: 100,
    margin: 30,
    borderRadius: 20,
    opacity: 0.6,
    backgroundColor: "#4B0082",
  },

  boutonsMusique: {
    //boutons
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 5,
  },

  progress: {
    margin: 30,
    height: 5,
    width: 300,
    backgroundColor: "black",
  },

  musicListContainer: {
    margin: 10,
  },
});
