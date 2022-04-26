import React, { Component } from "react";

import { TextInput, FlatList, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

import exerciceService, { ExerciceS } from "../../../services/exercice.service";

import { NavigationProps } from "../../../navigation/App.navigator";

import ExerciceItem from "../ExerciceItem/ExerciceItem";

import { styleTitre } from "../../../styles/styleTitre";
import { styleBoutons } from "../../../styles/styleBouton";

interface ExerciceListAjouterState {
  exercices: Array<ExerciceS>;
  difficulteFilter: string;
  navigation: any;
  itemExercice: string;
}

export default class ExerciceListAjouter extends Component<
  NavigationProps,
  ExerciceListAjouterState
> {
  state: ExerciceListAjouterState = {
    exercices: [],
    difficulteFilter: "",
    navigation: undefined,
    itemExercice: "",
  };

  //Chargement de tous les exercices à partir du service
  loadExercices = () => {
    exerciceService.getAll().then((exercices) => {
      let displayedExercices = exercices;
      if (
        ["Débutant", "Intermédiaire", "Avancé"].includes(
          this.state.difficulteFilter
        )
      ) {
        displayedExercices = exercices.filter(
          (e) => e.difficulte === this.state.difficulteFilter
        );
      }
      this.setState({ exercices: displayedExercices });
    });
  };

  componentDidMount() {
    this.loadExercices();
  }
  //Permet d'utiliser le filtre

  onChangeFilter = (filter: string) => {
    this.setState({ difficulteFilter: filter });
  };
  ajouter = () => {
    alert("Cet exercice a été ajouté au cours");
  };

  render() {
    const accederMusiques = () => this.props.navigation.navigate("MesMusiques");

    return (
      <View>
        <View>
          <TextInput
            style={styleTitre.input}
            placeholder="Difficulté"
            onChangeText={this.onChangeFilter}
          />
        </View>

        <Button
          style={styleBoutons.buttonEnregister}
          mode="contained"
          onPress={this.loadExercices}
        >
          Rechercher par difficulté
        </Button>

        <FlatList<ExerciceS>
          data={this.state.exercices}
          keyExtractor={(item) => item.nomExo}
          renderItem={({ item }: { item: ExerciceS }) => (
            <TouchableOpacity onPress={accederMusiques}>
              <ExerciceItem exercice={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
