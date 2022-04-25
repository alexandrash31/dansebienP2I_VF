import React, { Component } from "react";

import { Text, View } from "react-native";

import { Cours } from "../../services/cours.services";

import { styleContainer } from "../../styles/styleContainer";
import { styleTitre } from "../../styles/styleTitre";

interface CoursItemProps {
  cours: Cours;
}

export default class CoursItem extends Component<CoursItemProps, {}> {
  render() {
    return (
      <View style={styleContainer.main_container}>
        <Text style={styleTitre.title_text}>{this.props.cours.nomduCours}</Text>
      </View>
    );
  }
}
