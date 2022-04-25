import React, { Component } from "react";

import { TextInput, FlatList, TouchableOpacity, View } from "react-native";
import { Button, Title } from "react-native-paper";

import exerciceService, { ExerciceS } from "../services/exercice.service";

import { MesExercicesProps } from "../navigation/App.navigator";

import ExerciceItemModifiable from "../components/Exercice/ExerciceItem/ExerciceItemModifiable";
import ExerciceDetailsModifiable from "../components/Exercice/ExerciceDetails/ExerciceDetailsModifiable";

import { styleTitre } from "../styles/styleTitre";
import { styleBoutons } from "../styles/styleBouton";

interface VoirMesExercicesState {
  exercices: Array<ExerciceS>;
  difficulteFilter: string;
  favoriFilter: boolean;
  el: boolean;
  itemExercice: ExerciceS;
  onDelete: (nomExo: string) => void;
  favori: (nomExo: string) => void;
}

export default class VoirMesExercicesScreen extends Component<
  MesExercicesProps,
  VoirMesExercicesState
> {
  private el = false;

  state: VoirMesExercicesState = {
    exercices: [],
    difficulteFilter: "",
    favoriFilter: true,
    el: false,
    itemExercice: {
      id: "2",
      difficulte: "Intermédiaire",
      nomExo: "Exo2",
      typeExo: "relevés",
      tempo: "2-2-48-4",
      solo: false,
      favori: false,
      pas: [],
    },
    onDelete: function (task: string): void {
      throw new Error("Function not implemented.");
    },
    favori: function (nomExo: string): void {
      throw new Error("Function not implemented.");
    },
  };
  //loadExercices permet d'afficher les exercices qui sont enregistrés dans la section services, qui sert comme pseudo base de données, instauration de filtre
  //selon la difficulté
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
  //Filtre selon si l'exercice a été mis en favori ou pas
  loadFavori = () => {
    exerciceService.getAll().then((exercices) => {
      let displayedExercices = exercices;
      if (this.state.favoriFilter) {
        displayedExercices = exercices.filter(
          (e) => e.favori === this.state.favoriFilter
        );
      }
      this.setState({ exercices: displayedExercices });
    });
  };

  componentDidMount() {
    this.loadExercices();
  }

  removeExercice = (nomExo: string) => {
    exerciceService.remove(nomExo);
    this.loadExercices();
  };

  favoriExercice = (nomExo: string) => {
    exerciceService.favori(nomExo);
    this.loadExercices();
  };

  onChangeFilter = (filter: string) => {
    this.setState({ difficulteFilter: filter });
  };

  changer = (itemExercice: ExerciceS) => {
    this.setState({ el: true });
    this.setState({ itemExercice });
  };
  //bouton de retour
  changerR = () => {
    this.setState({ el: false });
  };
  render() {
    if (this.state.el) {
      return (
        <View>
          <ExerciceDetailsModifiable exercice={this.state.itemExercice} />
          <Button onPress={this.changerR}>Retour</Button>
        </View>
      );
    }
    //Si on clique sur un exercice, apparition des details

    return (
      <View>
        <Title style={styleTitre.titre}> Mes Exercices</Title>

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

        <Button
          style={styleBoutons.buttonEnregister}
          mode="contained"
          onPress={this.loadFavori}
        >
          Voir mes favoris
        </Button>

        <FlatList<ExerciceS>
          data={this.state.exercices}
          keyExtractor={(item) => item.nomExo}
          renderItem={({ item }: { item: ExerciceS }) => (
            <TouchableOpacity onPress={() => this.changer(item)}>
              <ExerciceItemModifiable
                exercice={item}
                onDelete={this.removeExercice}
                favori={this.favoriExercice}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
