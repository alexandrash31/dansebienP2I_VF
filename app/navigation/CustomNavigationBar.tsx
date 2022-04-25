import { Appbar } from "react-native-paper";
import { styleContainer } from "../styles/styleContainer";

interface elements {
  navigation: any;
  back: any;
}
export default function CustomNavigationBar(props: elements) {
  return (
    <Appbar.Header style={styleContainer.header}>
      {props.back ? (
        <Appbar.BackAction onPress={props.navigation.goBack} />
      ) : null}
      <Appbar.Content title="dansebien" />
    </Appbar.Header>
  );
}
