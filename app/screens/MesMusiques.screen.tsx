import React, { Component } from "react";
import { View, FlatList, Alert } from "react-native";
import { Button, Title } from "react-native-paper";
import { MesMusiquesProps } from "../navigation/App.navigator";
import { styleTitre } from "../styles/styleTitre";
import musiquesServices, { Musique } from "../services/musiques.services";
import MusiqueComposant from "../components/musique";
import { styleBoutons } from "../styles/styleBouton";

interface MesMusiquesState {
  musique: Array<Musique>;
}
export default class MesMusiquesScreen extends Component<
  MesMusiquesProps,
  MesMusiquesState
> {
  state: MesMusiquesState = {
    musique: [],
  };

  loadMusiques = () => {
    musiquesServices.getAll().then((musique) => {
      this.setState({ musique });
    });
  };

  componentDidMount() {
    this.loadMusiques();
  }

  ajouter = () => {
    Alert.alert("cet exercice a bien été ajouté au cours");
  };

  telecharger = () => {
    Alert.alert("Télécharger une musique");
  };

  render() {
    //Page possédant toutes les musiques de l'app
    return (
      <View>
        <Title style={styleTitre.titre}>
          Choisissez une musique pour cet exercice en cliquant sur le titre :
        </Title>

        <Button
          style={styleBoutons.buttonEnregister}
          mode="contained"
          onPress={this.telecharger}
        >
          + Telecharger une musique
        </Button>
        <View>
          <FlatList<Musique>
            data={this.state.musique}
            keyExtractor={(item) => item.id}
            renderItem={({ item }: { item: Musique }) => (
              <MusiqueComposant
                titre={item.titre}
                path={item.path}
                onPress={this.ajouter}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
