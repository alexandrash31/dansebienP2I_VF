export interface PasS {
  id?: string;
  typePas: string;
  repetitions?: number;
}

class PasServ {
  public pas: Array<PasS> = [
    { id: "1", typePas: "demi-plié", repetitions: 2 },
    { id: "2", typePas: "grand-plié", repetitions: 2 },
    { id: "3", typePas: "penché côté", repetitions: 2 },
  ];

  getAll(): Promise<Array<PasS>> {
    return new Promise((resolve) => {
      resolve(this.pas);
    });
  }

  removePas(typePas: string) {
    this.pas = this.pas.filter((pas: PasS) => pas.typePas !== typePas);
  }
}

export default new PasServ();
