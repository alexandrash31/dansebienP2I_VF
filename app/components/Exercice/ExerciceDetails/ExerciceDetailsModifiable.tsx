import React, { Component } from "react";

import { Button } from "react-native-paper";
import { Text, View, ScrollView, TextInput, Alert } from "react-native";

import PasList from "../../Pas/PasList/PasList";
import PasListModifiable from "../../Pas/PasList/PasListModifiable";

import { styleContainer } from "../../../styles/styleContainer";
import { styleTitre } from "../../../styles/styleTitre";
import { styleBoutons } from "../../../styles/styleBouton";

import { ExerciceS } from "../../../services/exercice.service";
import pasServices from "../../../services/pas.services";
import { PasS } from "../../../services/pas.services";

interface ExerciceDetailsModifiableProps {
  exercice: ExerciceS;
}

interface ExerciceDetailsModifiableState {
  modifier: boolean;
  pas: Array<PasS>;
  partialPas: Partial<PasS>;
}

export default class ExerciceDetailsModifiable extends Component<
  ExerciceDetailsModifiableProps,
  ExerciceDetailsModifiableState
> {
  state: ExerciceDetailsModifiableState = {
    modifier: false,
    pas: [],
    partialPas: {},
  };

  //updatePas permet de modifier chaque element constituant de l'objet pas
  updatePas = (update: Partial<PasS>) => {
    this.setState({ partialPas: { ...this.state.partialPas, ...update } });
  };
  loadPas = () =>
    pasServices.getAll().then((pas) => {
      this.setState({ pas });
    });

  removePas = (typePas: string) => {
    this.props.exercice.pas = this.props.exercice.pas?.filter(
      (pas: PasS) => pas.typePas !== typePas
    );

    this.loadPas();
  };

  modifier = () => {
    this.setState({ modifier: true });
  };

  enregistrermodif = () => {
    this.setState({ modifier: false });
  };
  //submit permet d'enregistrer l'objet pas dans un tableau pour pouvoir être affiché
  submit = () => {
    if (this.state.partialPas.typePas && this.state.partialPas.repetitions) {
      if (!this.props.exercice.pas) {
        const pas: Array<PasS> = [];
        pas.push({
          id: this.state.partialPas.id,
          typePas: this.state.partialPas.typePas,
          repetitions: this.state.partialPas.repetitions,
        });
        this.setState({ pas: pas });
      } else {
        {
          this.props.exercice.pas?.push({
            id: this.state.partialPas.id,
            typePas: this.state.partialPas.typePas,
            repetitions: this.state.partialPas.repetitions,
          });
        }

        Alert.alert("Le pas a bien été ajouté, veuillez enregistrer");
      }
    }
  };

  render() {
    if (this.state.modifier)
      return (
        <ScrollView>
          <Text style={styleTitre.titre}>{this.props.exercice.nomExo}</Text>
          <View>
            <View style={styleContainer.infoExo_container}>
              <Text style={styleTitre.detailsExoText}>
                Niveau : {this.props.exercice.difficulte}
              </Text>
              <Text style={styleTitre.detailsExoText}>
                Type d'exercice : {this.props.exercice.typeExo}
              </Text>
              <Text style={styleTitre.detailsExoText}>
                Tempo : {this.props.exercice.tempo}
              </Text>
            </View>

            <Text style={styleTitre.titre2}> Ajouter un pas </Text>

            <TextInput
              style={styleTitre.input}
              placeholder="Type de pas"
              onChangeText={(text) => this.updatePas({ typePas: text })}
            />

            <TextInput
              style={styleTitre.input}
              placeholder="repetitions"
              onChangeText={(text) =>
                this.updatePas({ repetitions: Number(text) })
              }
            />

            <Button
              style={styleBoutons.buttonEnregister}
              mode="contained"
              onPress={this.submit}
            >
              Ajouter un pas
            </Button>
          </View>
          <View style={styleBoutons.boutonsMusique}>
            <Text style={styleTitre.titre2}> Type de pas </Text>
            <Text style={styleTitre.titre2}> Nombre de repétitions</Text>
          </View>
          <View>
            <PasListModifiable
              onDelete={this.removePas}
              pas={this.props.exercice.pas!}
            />
          </View>
          <Button onPress={this.enregistrermodif}>ENREGISTRER</Button>
        </ScrollView>
      );

    return (
      <ScrollView>
        <Text style={styleTitre.titre}>{this.props.exercice.nomExo}</Text>

        <View style={styleContainer.infoExo_container}>
          <Text style={styleTitre.detailsExoText}>
            Niveau : {this.props.exercice.difficulte}
          </Text>
          <Text style={styleTitre.detailsExoText}>
            Type d'exercice : {this.props.exercice.typeExo}
          </Text>
          <Text style={styleTitre.detailsExoText}>
            Tempo {this.props.exercice.tempo}
          </Text>
        </View>
        <View style={styleBoutons.boutonsMusique}>
          <Text style={styleTitre.titre2}> Type de pas </Text>
          <Text style={styleTitre.titre2}> Nombre de repétitions</Text>
        </View>
        <PasList pas={this.props.exercice.pas!} />
        <Button onPress={this.modifier}>MODIFIER</Button>
      </ScrollView>
    );
  }
}
