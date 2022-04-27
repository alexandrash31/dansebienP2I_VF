import React, { Component } from "react";
import { TextInput, View, Alert, ScrollView, Text } from "react-native";
import { Button, Title } from "react-native-paper";
import { styleBoutons } from "../styles/styleBouton";
import { PasS } from "../services/pas.services";

import { Picker } from "@react-native-picker/picker";

import { ExerciceS } from "../services/exercice.service";

import ExerciceList from "../components/Exercice/ExerciceList/ExerciceList";
import { styleTitre } from "../styles/styleTitre";
import PasList from "../components/Pas/PasList/PasList";

interface CreerUnExerciceScreenState {
  exercice: Array<ExerciceS>;
  pas: Array<PasS>;
  partialExercice: Partial<ExerciceS>;
  partialPas: Partial<PasS>;
  displayAjoutPas: boolean;
}

export default class CreerUnExerciceScreen extends Component<
  {},
  CreerUnExerciceScreenState
> {
  state: CreerUnExerciceScreenState = {
    exercice: [],
    pas: [],
    partialExercice: {},
    partialPas: {},

    displayAjoutPas: false,
  };
  //updateExercice permet de modifier chaque element constituant de l'objet exercice

  updateExercice = (update: Partial<ExerciceS>) => {
    this.setState({
      partialExercice: { ...this.state.partialExercice, ...update },
    });
  };
  //submitExercice permet d'enregistrer l'objet pas dans un tableau pour pouvoir être affiché

  submitExercice = () => {
    if (
      this.state.partialExercice.nomExo &&
      this.state.partialExercice.difficulte &&
      this.state.partialExercice.typeExo &&
      this.state.partialExercice.tempo
    ) {
      const exercice: Array<ExerciceS> = [...this.state.exercice];
      exercice.push({
        nomExo: this.state.partialExercice.nomExo,
        difficulte: this.state.partialExercice.difficulte,
        typeExo: this.state.partialExercice.typeExo,
        tempo: this.state.partialExercice.tempo,
      });
      this.setState({ exercice: exercice });

      this.setState({ displayAjoutPas: true });
    }
  };
  //updatePas permet de modifier chaque element constituant de l'objet pas

  updatePas = (update: Partial<PasS>) => {
    this.setState({ partialPas: { ...this.state.partialPas, ...update } });
  };

  //submitPas permet d'enregistrer l'objet pas dans un tableau pour pouvoir être affiché
  submitPas = () => {
    if (this.state.partialPas.typePas && this.state.partialPas.repetitions) {
      const pas: Array<PasS> = [...this.state.pas];
      pas.push({
        id: this.state.partialPas.id,
        typePas: this.state.partialPas.typePas,
        repetitions: this.state.partialPas.repetitions,
      });
      this.setState({ pas: pas });
    }
  };

  enregistrer = () => {
    Alert.alert("cet exercice a bien été enregistré");
  };

  render() {
    if (!this.state.displayAjoutPas)
      return (
        <View>
          <View>
            <Title style={styleTitre.titre}> Créer un exercice</Title>
            <TextInput
              style={styleTitre.input}
              placeholder="Nom de l'exercice"
              onChangeText={(text) => this.updateExercice({ nomExo: text })}
            />
            <TextInput
              style={styleTitre.input}
              placeholder="Type de l'exercice"
              onChangeText={(text) => this.updateExercice({ typeExo: text })}
            />
            <Text style={styleTitre.titre2}>
              Choisissez un niveau de difficulté :
            </Text>
            <Picker
              itemStyle={styleTitre.input}
              selectedValue={this.state.partialExercice.difficulte}
              onValueChange={(itemValue) =>
                this.updateExercice({ difficulte: itemValue })
              }
            >
              <Picker.Item label="Débutant" value="Débutant" />
              <Picker.Item label="Intermédiaire" value="Intermédiaire" />
              <Picker.Item label="Avancé" value="Avancé" />
            </Picker>

            <TextInput
              style={styleTitre.input}
              placeholder="Tempo"
              onChangeText={(text) => this.updateExercice({ tempo: text })}
            />

            <Button
              style={styleBoutons.buttonEnregister}
              mode="contained"
              onPress={this.submitExercice}
            >
              Enregistrer{" "}
            </Button>
          </View>
        </View>
      );
    //Si on clique sur enregistrer, on peut ensuite ajouter des pas à l'exercice qui vient d'être crée
    return (
      <ScrollView>
        <View>
          <ExerciceList exercice={this.state.exercice} />
        </View>

        <View>
          <Title> Ajouter des pas</Title>
          <TextInput
            style={styleTitre.input}
            placeholder="Type de pas"
            onChangeText={(text) => this.updatePas({ typePas: text })}
          />

          <TextInput
            style={styleTitre.input}
            placeholder="repetitions : tapez un nombre"
            onChangeText={(text) =>
              this.updatePas({ repetitions: Number(text) })
            }
          />

          <PasList pas={this.state.pas} />

          <Button
            style={styleBoutons.buttonEnregister}
            mode="contained"
            onPress={this.submitPas}
          >
            Ajouter un pas
          </Button>
        </View>
        <Button
          onPress={this.enregistrer}
          style={styleBoutons.buttonEnregister}
          mode="contained"
        >
          Enregistrer
        </Button>
      </ScrollView>
    );
  }
}
