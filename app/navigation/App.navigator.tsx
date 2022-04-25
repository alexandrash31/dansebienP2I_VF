import React from "react";

import type { StackNavigationProp } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AccueilScreen from "../screens/Accueil.screen";
import CreerUnExerciceScreen from "../screens/CreerUnExercice.screen";
import VoirMesExercicesScreen from "../screens/VoirMesExercices.screen";
import CreerUnCourscreen from "../screens/CreerUnCours.screen";
import VoirMesCoursScreen from "../screens/VoirMesCours.screen";
import MesMusiquesScreen from "../screens/MesMusiques.screen";

import CustomNavigationBar from "./CustomNavigationBar";

import ExerciceListAjouter from "../components/Exercice/ExerciceList/ExerciceListAjouter";

export type RootStackParamsList = {
  Accueil: undefined;
  CreerunCours: undefined;
  MesCours: undefined;
  CreerunExercice: undefined;
  MesExercices: undefined;
  MesExercices2: undefined;
  MesMusiques: undefined;
};

export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamsList, any>;
}

export interface AccueilProps {
  navigation: StackNavigationProp<RootStackParamsList, "Accueil">;
}
export interface MesMusiquesProps {
  navigation: StackNavigationProp<RootStackParamsList, "MesMusiques">;
}
export interface CreerUnCoursProps {
  navigation: StackNavigationProp<RootStackParamsList, "CreerunCours">;
}
export interface MesCoursProps {
  navigation?: StackNavigationProp<RootStackParamsList, "MesCours">;
}
export interface CreerunExerciceProps {
  navigation: StackNavigationProp<RootStackParamsList, "CreerunExercice">;
}
export interface MesExercicesProps {
  navigation?: StackNavigationProp<RootStackParamsList, "MesExercices">;
}
export interface MesExercices2Props {
  navigation: StackNavigationProp<RootStackParamsList, "MesExercices2">;
}

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppNavigator() {
  {
    return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Accueil"
          screenOptions={{
            header: ({ navigation, back }) => (
              <CustomNavigationBar navigation={navigation} back={back} />
            ),
          }}
        >
          <Screen name="Accueil" component={AccueilScreen}></Screen>
          <Screen name="CreerunCours" component={CreerUnCourscreen}></Screen>
          <Screen name="MesCours" component={VoirMesCoursScreen}></Screen>
          <Screen
            name="CreerunExercice"
            component={CreerUnExerciceScreen}
          ></Screen>
          <Screen
            name="MesExercices"
            component={VoirMesExercicesScreen}
          ></Screen>

          <Screen name="MesExercices2" component={ExerciceListAjouter}></Screen>
          <Screen name="MesMusiques" component={MesMusiquesScreen}></Screen>
        </Navigator>
      </NavigationContainer>
    );
  }
}
