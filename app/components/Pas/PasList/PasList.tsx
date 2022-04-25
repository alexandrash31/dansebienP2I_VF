import React, { Component } from "react";

import { FlatList } from "react-native";

import { PasS } from "../../../services/pas.services";
import { styleContainer } from "../../../styles/styleContainer";

import PasItem from "../PasItem/PasItem";

interface PasListProps {
  pas: Array<PasS>;
}

export default class PasList extends Component<PasListProps, {}> {
  render() {
    return (
      <FlatList<PasS>
        style={styleContainer.pascontainer}
        data={this.props.pas}
        keyExtractor={(pas) => pas.typePas}
        renderItem={({ item }: { item: PasS }) => <PasItem pas={item} />}
      />
    );
  }
}
