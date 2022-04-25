import React, { Component } from "react";

import { Text, View } from "react-native";

import { PasS } from "../../../services/pas.services";

import { styleBoutons } from "../../../styles/styleBouton";
import { styleTitre } from "../../../styles/styleTitre";

interface PasItemProps {
  pas: PasS;
}

export default class PasItem extends Component<PasItemProps, {}> {
  render() {
    return (
      <View>
        <View style={styleBoutons.boutonsMusique}>
          <Text style={styleTitre.pasText}>{this.props.pas.typePas}</Text>
          <Text style={styleTitre.pasText}> {this.props.pas.repetitions}</Text>
        </View>
      </View>
    );
  }
}
