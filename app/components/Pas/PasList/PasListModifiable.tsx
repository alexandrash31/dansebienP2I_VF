import React, { Component } from "react";

import { FlatList } from "react-native";

import { PasS } from "../../../services/pas.services";

import PasItemModifiable from "../PasItem/PasItemModifiable";

import { styleContainer } from "../../../styles/styleContainer";

interface PasListModifiableProps {
  pas: Array<PasS>;
  onDelete: (typePas: string) => void;
}

export default class PasListModifiable extends Component<
  PasListModifiableProps,
  {}
> {
  render() {
    return (
      <FlatList<PasS>
        style={styleContainer.pascontainer}
        data={this.props.pas}
        keyExtractor={(pas) => pas.typePas}
        renderItem={({ item }: { item: PasS }) => (
          <PasItemModifiable pas={item} onDelete={this.props.onDelete} />
        )}
      />
    );
  }
}
