import React, { Component } from "react";

import { Text, View } from "react-native";

import { PasS } from "../../../services/pas.services";

import { styleTitre } from "../../../styles/styleTitre";

interface PasItemProps {
  pas: PasS;
}

export default class PasItem extends Component<PasItemProps, {}> {
  render() {
    return (
      <View style={styleTitre.pasText2}>
        <Text style={styleTitre.pasText}>{this.props.pas.typePas}</Text>
        <Text style={styleTitre.pasText}> {this.props.pas.repetitions}</Text>
      </View>
    );
  }
}
