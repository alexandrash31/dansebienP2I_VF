import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { ExerciceS } from "../../../services/exercice.service";

import { styleContainer } from "../../../styles/styleContainer";
import { styleTitre } from "../../../styles/styleTitre";

interface ExerciceItemModifiableProps {
  exercice: ExerciceS;
  onDelete: (nomExo: string) => void;
  favori: (nomExo: string) => void;
}

export default class ExerciceItemModifiable extends Component<
  ExerciceItemModifiableProps,
  {}
> {
  //Permet d'effacer un exercice
  removeItem = () => {
    const { onDelete } = this.props;
    onDelete(this.props.exercice.nomExo);
  };
  //Permet de mettre en favori un exercice
  favoriAjoute = () => {
    this.props.exercice.favori = !this.props.exercice.favori;
    this.setState({});
  };

  render() {
    return (
      <View style={styleContainer.main_container}>
        <TouchableOpacity onPress={this.removeItem}>
          <Text style={styles.removeIcon}> &times; </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.favoriAjoute}>
          <FontAwesome
            name={this.props.exercice.favori ? "heart" : "heart-o"}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        <View>
          <View>
            <Text style={styleTitre.title_text}>
              {this.props.exercice.nomExo}
            </Text>
            <Text style={styleTitre.description_text}>
              {this.props.exercice.difficulte}
            </Text>
          </View>
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
