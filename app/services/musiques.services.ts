import { AVPlaybackSource } from "expo-av/build/AV.types";

export interface Musique {
  id: string;
  titre: string;
  path: AVPlaybackSource;
}

class MusiqueServ {
  private musiques: Array<Musique> = [
    {
      id: "1",
      titre: "Pliés - Hyoseul Grace Kim",
      path: require("../musiques/pliés.mp3"),
    },

    {
      id: "2",
      titre: "Dégagé from Music for Ballet Class Vol.3 - Soren Bebe",
      path: require("../musiques/degages.mp3"),
    },

    {
      id: "3",
      titre: "Petits battements - Back in the Saddle Again",
      path: require("../musiques/petits_battements.mp3"),
    },

    {
      id: "4",
      titre: "Rond De Jambe - Once Upon a December - C.N. Hobson",
      path: require("../musiques/rond_de_jambe.mp3"),
    },
    {
      id: "5",
      titre: "Frappés - Barbero de Sevilla - Rossini",
      path: require("../musiques/frappes.mp3"),
    },
    {
      id: "6",
      titre: "Grand Battement En Clôche- Christopher N Hobson",
      path: require("../musiques/grands_battements.mp3"),
    },
  ];

  getAll(): Promise<Array<Musique>> {
    return new Promise((resolve) => {
      resolve(this.musiques);
    });
  }
}

export default new MusiqueServ();
