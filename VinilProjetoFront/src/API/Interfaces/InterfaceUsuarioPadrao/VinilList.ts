import { estiloMusical } from "./EnumEstiloMusical";
import { statusVinil } from "./EnumStatusVinil";
import { VinilImagem } from "./VinilImagem";

export interface VinilList{
    nomeVinil: string,
    descricaoVinil: string,
    precoVinil: string,
    quantiaVinil: string,
    estiloMusical: estiloMusical,
    vinilImagem: VinilImagem[]
    statusVinil: statusVinil,
    id: string
}