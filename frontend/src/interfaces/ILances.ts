import IOfertas from "./IOfertas";

export default interface ILances {
  id: number
  fk_ofertas: number
  volume: number
  valor: number
  status: string
  data: Date
  Oferta: IOfertas
}