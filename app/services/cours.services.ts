import { Difficulte, ExerciceS } from "./exercice.service";

export interface Cours {
  nomduCours: string;
  difficulte: Difficulte;
  exercices?: Array<ExerciceS>;
  id?: string;
}

class CoursServ {
  private cours: Array<Cours> = [
    {
      nomduCours: "JEUDI - 20h",
      difficulte: "Intermédiaire",
      id: "1",

      exercices: [
        {
          id: "1",
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

          musique: {
            id: "1",
            titre: "Pliés - Hyoseul Grace Kim",
            path: require("../musiques/pliés.mp3"),
          },
        },
        {
          id: "2",
          difficulte: "Avancé",
          nomExo: "Dégagés",
          typeExo: "dégagés",
          tempo: "1-1-1-1-1-1-1-1",

          pas: [
            { id: "1", typePas: "dégagé", repetitions: 1 },
            { id: "2", typePas: "pied en dedans", repetitions: 1 },
            { id: "3", typePas: "en dehors", repetitions: 1 },
            { id: "4", typePas: "flex", repetitions: 1 },
            { id: "5", typePas: "pointé", repetitions: 1 },
            { id: "6", typePas: "fermé", repetitions: 1 },
            { id: "7", typePas: "dégagé-fermé", repetitions: 1 },
            { id: "8", typePas: "plié", repetitions: 1 },
          ],

          musique: {
            id: "1",
            titre: "Dégagés - from Music for Ballet Class Vol.3",
            path: require("../musiques/degages.mp3"),
          },
          favori: true,
          solo: false,
        },
        {
          id: "3",
          difficulte: "Avancé",
          nomExo: "Petits battements en cinquième",
          typeExo: "petis battements",
          tempo: " 1-1-1-1-1-1-1-2",
          pas: [
            { id: "1", typePas: "dégagé", repetitions: 1 },
            { id: "2", typePas: "en l'air", repetitions: 1 },
            { id: "3", typePas: "pointé", repetitions: 1 },
            { id: "4", typePas: "fermé", repetitions: 1 },
            { id: "5", typePas: "jeté", repetitions: 1 },
            { id: "6", typePas: "jeté.", repetitions: 1 },
            { id: "7", typePas: "développé", repetitions: 2 },
          ],
          favori: true,
          solo: false,

          musique: {
            id: "1",
            titre: "Petits battements - Back in the Saddle Again",
            path: require("../musiques/petits_battements.mp3"),
          },
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
            { id: "4", typePas: "relevé.", repetitions: 1 },
            { id: "5", typePas: "dégagé plié", repetitions: 1 },
            { id: "6", typePas: "rond derrière", repetitions: 1 },
            { id: "7", typePas: "rond de jambe", repetitions: 2 },
          ],

          musique: {
            id: "1",
            titre: " Once Upon a December - C.N. Hobson",
            path: require("../musiques/rond_de_jambe.mp3"),
          },
          favori: true,
          solo: false,
        },
        {
          id: "5",
          difficulte: "Avancé",
          nomExo: "Frappés en croix",
          typeExo: "frappés",
          tempo: "4-4 1-1-1-1-1-1-1-1",

          pas: [
            { id: "1", typePas: "tend intérieur", repetitions: 4 },
            { id: "2", typePas: "plié", repetitions: 4 },
            { id: "3", typePas: "frapé devant", repetitions: 2 },
            { id: "4", typePas: "frapé seconde", repetitions: 2 },
            { id: "5", typePas: "frappé derrière", repetitions: 2 },
          ],

          musique: {
            id: "1",
            titre: "Frappés - Barbero de Sevilla - Rossini",
            path: require("../musiques/frappes.mp3"),
          },
          favori: true,
          solo: false,
        },
        {
          id: "6",
          difficulte: "Intermédiaire",
          nomExo: "Grands battements en clôche",
          typeExo: "grands battements",
          tempo: "2-2-2-2",

          pas: [
            { id: "1", typePas: "grand battement", repetitions: 2 },
            { id: "2", typePas: "grand battement.", repetitions: 2 },
            { id: "3", typePas: "frapé devant", repetitions: 2 },
            { id: "4", typePas: "tendu", repetitions: 2 },
          ],

          musique: {
            id: "1",
            titre: "Grand Battement En Clôche- C.N Hobson",
            path: require("../musiques/grands_battements.mp3"),
          },
          favori: true,
          solo: false,
        },
        {
          id: "7",
          difficulte: "Avancé",
          nomExo: "Fondus en première",
          typeExo: "fondus",
          tempo: "1-1-1-1-4",

          pas: [
            { id: "1", typePas: "plié.", repetitions: 1 },
            { id: "2", typePas: "developpé", repetitions: 1 },
            { id: "3", typePas: "plié", repetitions: 1 },
            { id: "4", typePas: "flex", repetitions: 1 },
            { id: "5", typePas: "retiré équilibre", repetitions: 4 },
          ],

          musique: {
            id: "1",
            titre: "Fondus - Ballet Class Music Album 1 - R.Hausheer",
            path: require("../musiques/fondus.mp3"),
          },
          favori: true,
          solo: false,
        },
      ],
    },
    {
      nomduCours: "MERCREDI - 18h30",
      difficulte: "Avancé",
      id: "2",
      exercices: [
        {
          id: "1",
          difficulte: "Débutant",
          nomExo: "Pliés en croix ",
          typeExo: "pliés",
          tempo: "2-2-2-4",
          pas: [
            { id: "1", typePas: "demi-plié", repetitions: 2 },
            { id: "2", typePas: "grand plié", repetitions: 4 },
            { id: "3", typePas: "penché de côté", repetitions: 2 },
          ],
          favori: true,
          solo: false,

          musique: {
            id: "1",
            titre: "Pliés - Hyoseul Grace Kim",
            path: require("../musiques/pliés.mp3"),
          },
        },
        {
          id: "2",
          difficulte: "Avancé",
          nomExo: "Dégagés",
          typeExo: "dégagés",
          tempo: "1-1-1-1-1-1-1-1",

          pas: [
            { id: "1", typePas: "dégagé", repetitions: 1 },
            { id: "2", typePas: "pied en dedans", repetitions: 1 },
            { id: "3", typePas: "en dehors", repetitions: 1 },
            { id: "4", typePas: "flex", repetitions: 1 },
          ],

          musique: {
            id: "1",
            titre: "Dégagés - from Music for Ballet Class Vol.3",
            path: require("../musiques/degages.mp3"),
          },
          favori: true,
          solo: false,
        },
      ],
    },
    {
      nomduCours: "VENDREDI - 14h30",
      difficulte: "Débutant",
      id: "3",
      exercices: [
        {
          id: "1",
          difficulte: "Débutant",
          nomExo: "Jetés échauffement",
          typeExo: "jetés",
          tempo: "2-2-2-4",
          pas: [
            { id: "1", typePas: "jetés.", repetitions: 2 },
            { id: "2", typePas: "grand-plié", repetitions: 2 },
            { id: "3", typePas: "jetés", repetitions: 2 },
            { id: "4", typePas: "grand-plié.", repetitions: 2 },
          ],
          favori: true,
          solo: false,

          musique: {
            id: "1",
            titre: "Dégagés - from Music for Ballet Class Vol.3",
            path: require("../musiques/degages.mp3"),
          },
        },
      ],
    },
    {
      nomduCours: "LUNDI - 20h30",
      difficulte: "Débutant",
      id: "4",
      exercices: [
        {
          id: "1",
          difficulte: "Avancé",
          nomExo: "Fondus en première",
          typeExo: "fondus",
          tempo: "1-1-1-1-4",

          pas: [
            { id: "1", typePas: "plié.", repetitions: 1 },
            { id: "2", typePas: "developpé", repetitions: 1 },
            { id: "3", typePas: "plié", repetitions: 1 },
            { id: "4", typePas: "flex", repetitions: 1 },
            { id: "5", typePas: "retiré équilibre", repetitions: 4 },
          ],

          musique: {
            id: "1",
            titre: "Fondus - Ballet Class Music Album 1 - R.Hausheer",
            path: require("../musiques/fondus.mp3"),
          },
          favori: true,
          solo: false,
        },
      ],
    },
  ];

  getAll(): Promise<Array<Cours>> {
    return new Promise((resolve) => {
      resolve(this.cours);
    });
  }
}

export default new CoursServ();
