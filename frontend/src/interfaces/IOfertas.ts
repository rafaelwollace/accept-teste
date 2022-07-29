import IEmpresas from "./IEmpresas";

export default interface IOfertas {
  id: number
  fk_empresas: number
  oferta: string
  descricao: string
  valor: number
  quantidade: number
  saida: string
  entrega: string
  Empresa: IEmpresas[]
}