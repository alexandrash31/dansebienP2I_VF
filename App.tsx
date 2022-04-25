import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/App.navigator";
import AccueilScreen from "./app/screens/Accueil.screen";
import CreerUnExerciceScreen from "./app/screens/CreerUnExercice.screen";
import { Provider as PaperProvider, Button } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
