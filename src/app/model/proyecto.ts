export class Proyecto {
  id?: number;
  nombreP: string;
  descripcion: string;
  /*  img: string; */

  constructor(nombreP: string, descripcion: string) {
    this.nombreP = nombreP;
    this.descripcion = descripcion;

  }
}
