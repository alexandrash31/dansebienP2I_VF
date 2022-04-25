import React, { Component } from "react";

import { Text, View } from "react-native";

import { ExerciceS } from "../../../services/exercice.service";

import { styleContainer } from "../../../styles/styleContainer";
import { styleTitre } from "../../../styles/styleTitre";

interface ExerciceItemProps {
  exercice: ExerciceS;
}

export default class ExerciceItem extends Component<ExerciceItemProps, {}> {
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
            Tempo : {this.props.exercice.tempo}
          </Text>
        </View>
      </View>
    );
  }
}
