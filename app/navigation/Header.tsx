import React, { Component } from "react";
import { Appbar } from "react-native-paper";

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  navigation?: any;
}

export default class Header extends Component<HeaderProps> {
  render() {
    const revenir = () => this.props.navigation?.revenir();
    if (this.props.hasBackButton == true) {
      return (
        <Appbar.Header>
          <Appbar.BackAction onPress={revenir} />
          <Appbar.Content title={this.props.title} />
        </Appbar.Header>
      );
    }

    return (
      <Appbar.Header>
        <Appbar.Content title={this.props.title} />
      </Appbar.Header>
    );
  }
}
