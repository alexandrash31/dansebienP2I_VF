import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { Button, Title } from "react-native-paper";
import { NavigationProps } from "../navigation/App.navigator";
import { styleBoutons } from "../styles/styleBouton";
import { Cours } from "../services/cours.services";
import CoursList from "../components/Cours/CoursList";
import ExerciceListAjouter from "../components/Exercice/ExerciceList/ExerciceListAjouter";
import { Picker } from "@react-native-picker/picker";
import { styleTitre } from "../styles/styleTitre";

interface CreerUnCoursScreenState {
  cours: Array<Cours>;
  partialCours: Partial<Cours>;
  displayAjouterExercices: boolean;
}

export default class CreerUnCourscreen extends Component<
  NavigationProps,
  CreerUnCoursScreenState
> {
  state: CreerUnCoursScreenState = {
    cours: [],
    partialCours: {},
    displayAjouterExercices: false,
  };
  //updateCours permet de modifier chaque element constituant de l'objet cours
  updateCours = (update: Partial<Cours>) => {
    this.setState({ partialCours: { ...this.state.partialCours, ...update } });
  };
  //submitCours permet d'enregistrer l'objet cours dans un tableau pour pouvoir être affiché
  submitCours = () => {
    if (
      this.state.partialCours.nomduCours &&
      this.state.partialCours.difficulte
    ) {
      const cours: Array<Cours> = [...this.state.cours];
      cours.push({
        nomduCours: this.state.partialCours.nomduCours,
        difficulte: this.state.partialCours.difficulte,
      });
      this.setState({ cours: cours });
      this.setState({ displayAjouterExercices: true });
    }
  };

  render() {
    //Affichage du formulaire pour crééer un cours
    if (!this.state.displayAjouterExercices)
      return (
        <View>
          <Title style={styleTitre.titre}> Créer un cours</Title>
          <TextInput
            style={styleTitre.input}
            placeholder="Nom du cours"
            onChangeText={(text) => this.updateCours({ nomduCours: text })}
          />

          <Picker
            itemStyle={styleTitre.input}
            selectedValue={this.state.partialCours.difficulte}
            onValueChange={(itemValue) =>
              this.updateCours({ difficulte: itemValue })
            }
          >
            <Picker.Item label="Débutant" value="Débutant" />
            <Picker.Item label="Intermédiaire" value="Intermédiaire" />
            <Picker.Item label="Avancé" value="Avancé" />
          </Picker>

          <Button
            style={styleBoutons.buttonEnregister}
            mode="contained"
            onPress={this.submitCours}
          >
            Créer un cours
          </Button>
        </View>
      );
    //Si on clique sur créer un cours, une liste d'exercices s'affiche pour choisir un exercice
    return (
      <View>
        <View>
          <CoursList cours={this.state.cours} />
        </View>
        <ExerciceListAjouter navigation={this.props.navigation} />
      </View>
    );
  }
}
