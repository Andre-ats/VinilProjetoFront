import { estiloMusical } from "./EnumEstiloMusical";
import { statusVinil } from "./EnumStatusVinil";

export interface VinilList{
    nomeVinil: string,
    descricaoVinil: string,
    precoVinil: string,
    quantiaVinil: string,
    estiloMusical: estiloMusical,
    statusVinil: statusVinil,
    id: string
}