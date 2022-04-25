import React, { Component } from "react";

import { FlatList } from "react-native";

import { ExerciceS } from "../../../services/exercice.service";

import ExerciceItem from "../ExerciceItem/ExerciceItem";

interface ExerciceListProps {
  exercice: Array<ExerciceS>;
}

export default class ExerciceList extends Component<ExerciceListProps, {}> {
  render() {
    return (
      <FlatList<ExerciceS>
        data={this.props.exercice}
        keyExtractor={(item) => item.nomExo}
        renderItem={({ item }: { item: ExerciceS }) => (
          <ExerciceItem exercice={item} />
        )}
      />
    );
  }
}
