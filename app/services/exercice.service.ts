import { PasS } from "../services/pas.services";
import { Musique } from "./musiques.services";

export type Difficulte = "Débutant" | "Intermédiaire" | "Avancé";

export interface ExerciceS {
  id?: string;
  difficulte?: Difficulte;
  nomExo: string;
  typeExo: string;
  tempo: string;
  pas?: Array<PasS>;
  musique?: Musique;
  favori?: boolean;
  solo?: boolean;
}

class ExercicesServ {
  private exercices: Array<ExerciceS> = [
    {
      id: "1",
      difficulte: "Débutant",
      nomExo: "Pliés à la seconde",
      typeExo: "pliés",
      tempo: "2-2-2-4",
      pas: [
        { id: "1", typePas: "jeté", repetitions: 2 },
        { id: "2", typePas: "plié", repetitions: 2 },
        { id: "3", typePas: "relevé", repetitions: 2 },
        { id: "4", typePas: "sousous", repetitions: 2 },
      ],
      favori: false,
      solo: true,
    },
    {
      id: "2",
      difficulte: "Débutant",
      nomExo: "Pliés échauffement",
      typeExo: "pliés",
      tempo: "2-2-4",
      pas: [
        { id: "1", typePas: "demi-plié", repetitions: 2 },
        { id: "2", typePas: "grand plié", repetitions: 4 },
        { id: "3", typePas: "penché de côté", repetitions: 2 },
        { id: "4", typePas: "penché en avant", repetitions: 2 },
        { id: "5", typePas: "relevé suspendu", repetitions: 4 },
      ],
      favori: true,
      solo: false,
    },
    {
      id: "3",
      difficulte: "Avancé",
      nomExo: "Jetés avec petits battements",
      typeExo: "jetés",
      tempo: "1-1-1-1-1-1-1-2",
      favori: true,
      solo: true,

      pas: [
        { id: "1", typePas: "dégagé", repetitions: 1 },
        { id: "2", typePas: "en l'air", repetitions: 1 },
        { id: "3", typePas: "pointé", repetitions: 1 },
        { id: "4", typePas: "fermé", repetitions: 1 },
      ],
    },
    {
      id: "4",
      difficulte: "Intermédiaire",
      nomExo: "Ronds de jambe à terre",
      typeExo: "ronds de jambe",
      tempo: "1-1-1-1-1-1-1-1",

      pas: [
        { id: "1", typePas: "fondu devant", repetitions: 1 },
        { id: "2", typePas: "relevé", repetitions: 1 },
        { id: "3", typePas: "fondu derrière", repetitions: 1 },
        { id: "4", typePas: "relevé", repetitions: 1 },
        { id: "5", typePas: "dégagé plié", repetitions: 1 },
        { id: "6", typePas: "rond derrière", repetitions: 1 },
        { id: "7", typePas: "rond de jambe", repetitions: 2 },
      ],

      favori: true,
      solo: false,
    },
    {
      id: "5",
      difficulte: "Intermédiaire",
      nomExo: "Jetés pliés et tendus",
      typeExo: "jetés",
      tempo: "2-2-48-4",
      favori: true,
      solo: true,
      pas: [
        { id: "1", typePas: "demi-plié", repetitions: 2 },
        { id: "2", typePas: "grand plié", repetitions: 4 },
        { id: "3", typePas: "penché de côté", repetitions: 2 },
      ],
    },

    {
      id: "6",
      difficulte: "Avancé",
      nomExo: "Fondus en première",
      typeExo: "fondus",
      tempo: "1-1-1-1-4",

      pas: [
        { id: "1", typePas: "plié", repetitions: 1 },
        { id: "2", typePas: "developpé", repetitions: 1 },
        { id: "3", typePas: "plié", repetitions: 1 },
        { id: "4", typePas: "flex", repetitions: 1 },
        { id: "5", typePas: "retiré équilibre", repetitions: 4 },
      ],

      favori: true,
      solo: false,
    },
  ];

  remove(nomExo: string) {
    this.exercices = this.exercices.filter(
      (exercices: ExerciceS) => exercices.nomExo !== nomExo
    );
  }

  favori(nomExo: string) {
    this.exercices ==
      this.exercices.map((exercice) => {
        if (exercice.favori == !exercice.favori) {
          return { nomExo, favori: exercice.favori };
        }
        return { nomExo, favori: !exercice.favori };
      });
  }

  getAll(): Promise<Array<ExerciceS>> {
    return new Promise((resolve) => {
      resolve(this.exercices);
    });
  }
}
export default new ExercicesServ();
