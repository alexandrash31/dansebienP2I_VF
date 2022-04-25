import React, { Component } from "react";

import { Text, View, Alert } from "react-native";

import { styleContainer } from "../../../styles/styleContainer";
import { styleTitre } from "../../../styles/styleTitre";
import { styleBoutons } from "../../../styles/styleBouton";

import { ExerciceS } from "../../../services/exercice.service";

import PasList from "../../Pas/PasList/PasList";

import MusiqueComposant from "../../musique";

interface ExerciceDetailsProps {
  exercice: ExerciceS;
}

export default class ExerciceDetails extends Component<
  ExerciceDetailsProps,
  {}
> {
  render() {
    return (
      <View>
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
        <MusiqueComposant
          titre={this.props.exercice.musique?.titre!}
          path={this.props.exercice.musique?.path!}
        />

        <View style={styleBoutons.boutonsMusique}>
          <Text style={styleTitre.titre2}> Type de pas </Text>
          <Text style={styleTitre.titre2}> Nombre de repétitions</Text>
        </View>

        <PasList pas={this.props.exercice.pas!} />
      </View>
    );
  }
}
