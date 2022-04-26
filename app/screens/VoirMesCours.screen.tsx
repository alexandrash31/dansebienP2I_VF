import React, { Component } from "react";

import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import coursServices, { Cours } from "../services/cours.services";

import CoursItem from "../components/Cours/CoursItem";
import CoursDetails from "../components/Cours/CoursDetails";

import { styleContainer } from "../styles/styleContainer";
import { styleTitre } from "../styles/styleTitre";

interface VoirMesCoursState {
  cours: Array<Cours>;
  displayCoursDetails: boolean;
  itemCours: Cours;
}

export default class VoirMesCoursScreen extends Component<
  {},
  VoirMesCoursState
> {
  //Inititalisation cours et exercice (peut importe lesquels)
  state: VoirMesCoursState = {
    cours: [],
    displayCoursDetails: false,
    itemCours: {
      nomduCours: "Jeudi 20h",
      difficulte: "Intermédiaire",
      id: "1",

      exercices: [
        {
          id: "1",
          difficulte: "Débutant",
          nomExo: "Exo1",
          typeExo: "pliés",
          tempo: "2-2-2-4",
          pas: [{ id: "1", typePas: "jetés", repetitions: 2 }],
          favori: true,
        },
      ],
    },
  };
  //Chargement de tous les cours à partir du service
  loadCours = () => {
    coursServices.getAll().then((cours) => {
      this.setState({ cours });
    });
  };

  componentDidMount() {
    this.loadCours();
  }
  //changer d'affichage pour pouvoir visualiser les details du cours
  changerC = (itemCours: Cours) => {
    this.setState({ displayCoursDetails: true });
    this.setState({ itemCours });
  };
  //Bouton de retour
  changerR = () => {
    this.setState({ displayCoursDetails: false });
  };

  render() {
    if (this.state.displayCoursDetails)
      return (
        <SafeAreaView>
          <CoursDetails cours={this.state.itemCours} />

          <Button onPress={this.changerR}>Retour</Button>
        </SafeAreaView>
      );
    return (
      <View>
        <Title style={styleTitre.titre}> Mes cours</Title>

        <FlatList<Cours>
          data={this.state.cours}
          keyExtractor={(item) => item.nomduCours}
          renderItem={({ item }: { item: Cours }) => (
            <TouchableOpacity
              onPress={() => this.changerC(item)}
              style={styleContainer.mainmodifier_container}
            >
              <CoursItem cours={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
