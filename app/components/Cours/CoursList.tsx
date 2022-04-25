import React, { Component } from "react";

import { FlatList } from "react-native";

import { Cours } from "../../services/cours.services";
import CoursItem from "./CoursItem";

interface CoursListProps {
  cours: Array<Cours>;
}

export default class CoursList extends Component<CoursListProps, {}> {
  render() {
    return (
      <FlatList<Cours>
        data={this.props.cours}
        keyExtractor={(item) => item.nomduCours}
        renderItem={({ item }: { item: Cours }) => <CoursItem cours={item} />}
      />
    );
  }
}
