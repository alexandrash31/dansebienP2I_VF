import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { AccueilProps } from "../navigation/App.navigator";
import { Cours } from "../services/cours.services";
import { ExerciceS } from "../services/exercice.service";
import { PasS } from "../services/pas.services";
import { styleBoutons } from "../styles/styleBouton";
import { styleContainer } from "../styles/styleContainer";

interface AccueilScreenState {
  exercices: Array<ExerciceS>;
  pas: Array<PasS>;
  cours: Array<Cours>;
  displayCreerCours: boolean;
  displayVoirExercices: boolean;
}
export default class AccueilScreen extends Component<
  AccueilProps,
  AccueilScreenState
> {
  state: AccueilScreenState = {
    exercices: [],
    cours: [],
    pas: [{ id: "1", typePas: "DEMI-PLIE", repetitions: 2 }],
    displayCreerCours: false,
    displayVoirExercices: false,
  };

  retour = () => {
    this.setState({ displayCreerCours: false });
  };
  render() {
    const accederCC = () => this.props.navigation.navigate("CreerunCours");
    const accederVC = () => this.props.navigation.navigate("MesCours");
    const accederVE = () => this.props.navigation.navigate("MesExercices");
    const accederCE = () => this.props.navigation.navigate("CreerunExercice");

    return (
      <View style={styleContainer.accueilcontainer}>
        <View>
          <Button
            style={[styleBoutons.buttonContainer, styleBoutons.buttonCreer]}
            mode="contained"
            onPress={accederCC}
          >
            Créer un cours
          </Button>
          <Button
            style={styleBoutons.buttonContainer}
            mode="contained"
            onPress={accederVC}
          >
            Voir mes cours
          </Button>
          <Button
            style={[styleBoutons.buttonContainer, styleBoutons.buttonCreer]}
            mode="contained"
            onPress={accederCE}
          >
            Créer un exercice
          </Button>
          <Button
            style={styleBoutons.buttonContainer}
            mode="contained"
            onPress={accederVE}
          >
            Voir mes exercices
          </Button>
        </View>
      </View>
    );
  }
}
