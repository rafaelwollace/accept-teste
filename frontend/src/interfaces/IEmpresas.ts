import ITipos from "./ITipos";

export default interface IEmpresas {
  id: number
  fk_tipos: number
  nome: string
  cnpj: number
  email: string
  Tipo: ITipos
}

