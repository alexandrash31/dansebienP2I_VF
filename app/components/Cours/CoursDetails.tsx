import React, { Component } from "react";

import { FlatList } from "react-native";

import { ExerciceS } from "../../services/exercice.service";
import { Cours } from "../../services/cours.services";

import ExerciceDetails from "../Exercice/ExerciceDetails/ExerciceDetails";
import { SafeAreaView } from "react-native-safe-area-context";

interface CoursDetailsProps {
  cours: Cours;
}

export default class CoursDetails extends Component<CoursDetailsProps, {}> {
  render() {
    return (
      <FlatList<ExerciceS>
        horizontal={true}
        data={this.props.cours.exercices}
        keyExtractor={(item) => item.nomExo}
        renderItem={({ item }: { item: ExerciceS }) => (
          <ExerciceDetails exercice={item} />
        )}
      />
    );
  }
}
