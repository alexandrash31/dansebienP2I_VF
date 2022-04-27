import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { AVPlaybackSource } from "expo-av/build/AV.types";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { styleBoutons } from "../styles/styleBouton";
import { styleTitre } from "../styles/styleTitre";
import { styleContainer } from "../styles/styleContainer";

interface MusiqueProps {
  titre: string;
  path: AVPlaybackSource;
  onPress?: () => void;
}

export default function MusiqueComposant(props: MusiqueProps) {
  {
    //Initialisation elements d'une musique
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [duration, setDuration] = React.useState<number | null>(null);
    const [position, setPosition] = React.useState<number | null>(null);
    const [isLooping, setIsLooping] = React.useState<boolean>(false);
    const onPlaybackStatusUpdate = (status: any) => {
      console.log(status);
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsLooping(status.isLooping);
    };
    //Creation de l'audio
    async function initSound() {
      const { sound } = await Audio.Sound.createAsync(
        props.path,
        { shouldPlay: false, isLooping: false },
        onPlaybackStatusUpdate
      );
      setSound(sound);
    }

    React.useEffect(() => {
      initSound();
    }, []);
    //Fonction qui permet de commencer la musique
    async function playSound() {
      if (sound) {
        await sound.playAsync();
      }
    }
    //Fonction qui permet de mettre pause la musiquqe
    async function pauseSound() {
      if (sound) {
        await sound.pauseAsync();
      }
    }
    //Fonction qui permet de mettre en boucle la musique
    async function LoopSound() {
      if (sound) {
        if (!isLooping) {
          await sound.setIsLoopingAsync(true);
        } else {
          await sound.setIsLoopingAsync(false);
        }
      }
    }
    //Fonction qui permet de modifier à quel instant la musique démarre
    async function onChange(e: number) {
      if (sound) {
        try {
          const position = duration ? Math.round(duration * e) : 0;
          await sound.setPositionAsync(position);
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
      }
    }
    //Fonction qui permet d'avoir une valeur qui représente la durée en cours d'une musique pour la représenter
    //avec une barre qui avance
    const getProgress = () => {
      if (sound == null || duration == null || position == null) {
        return 0;
      }
      return (position / duration) * 100;
    };
    return (
      <View style={styleContainer.musicontainer}>
        <View>
          <TouchableOpacity onPress={props.onPress}>
            <Text style={styleTitre.titre2}>{props.titre}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styleBoutons.progress, { width: `${getProgress()}%` }]} />
        <View>
          <Slider
            minimumTrackTintColor="purple"
            onValueChange={onChange}
          ></Slider>
        </View>
        <View style={styleBoutons.boutonsMusique}>
          <TouchableOpacity onPress={playSound}>
            <FontAwesome name="play" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pauseSound}>
            <FontAwesome name="pause" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={LoopSound}>
            <Entypo
              name="loop"
              size={20}
              color={isLooping ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
