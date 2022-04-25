import { StyleSheet } from "react-native";

export const styleTitre = StyleSheet.create({
  title_text: {
    fontWeight: "normal",
    fontSize: 20,
    color: "white",
    padding: 5,
  },

  titre: {
    fontWeight: "bold",
    fontSize: 25,
    color: "grey",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  titre2: {
    fontWeight: "600",
    fontSize: 18,
    color: "grey",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },

  input: {
    //pour les trucs textes juste
    margin: 10,
    height: 45,
    fontSize: 15,
    // backgroundColor: "white",
    // borderWidth: 0.9,
    borderRadius: 18,
  },
  description_text: {
    fontStyle: "italic",
    fontSize: 15,
    color: "white",
    alignContent: "center",
    justifyContent: "center",
  },

  detailsExoText: {
    fontSize: 18,
    color: "white",
    padding: 5,
  },
  pasText: {
    fontSize: 18,
    color: "white",
    padding: 5,
    alignContent: "space-around",
    //justifyContent: "space-evenly",
  },
});
