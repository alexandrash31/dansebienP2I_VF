import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { PasS } from "../../../services/pas.services";

import { styleTitre } from "../../../styles/styleTitre";
import { styleContainer } from "../../../styles/styleContainer";

interface PasItemModifiableProps {
  pas: PasS;
  onDelete: (typePas: string) => void;
}

export default class PasItemModifiable extends Component<
  PasItemModifiableProps,
  {}
> {
  removeItem = () => {
    const { onDelete } = this.props;
    onDelete(this.props.pas.typePas);
  };

  render() {
    return (
      <View>
        <View style={styleContainer.pasM_container}>
          <TouchableOpacity onPress={this.removeItem}>
            <Text style={styles.removeIcon}> &times; </Text>
          </TouchableOpacity>
          <Text style={styleTitre.pasText}>{this.props.pas.typePas}</Text>
          <Text style={styleTitre.pasText}> {this.props.pas.repetitions}</Text>
        </View>
      </View>
    );
  }
}

const colors = {
  removeIcon: "red",
};

const styles = StyleSheet.create({
  removeIcon: {
    color: colors.removeIcon,
    fontSize: 26,
  },
});
