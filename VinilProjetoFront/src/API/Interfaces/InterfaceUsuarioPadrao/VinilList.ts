import { CaracteristicasPrincipaisVinil } from "./CaracteristicasPrincipaisVinil";
import { statusVinil } from "./EnumStatusVinil";
import { OutrasCaracteristicas } from "./OutrasCaracteristicas";
import { VinilImagem } from "./VinilImagem";

export interface VinilList{
    nomeVinil: string,
    descricaoVinil: string,
    listaMusica: string,
    precoVinil: string,
    quantiaVinil: string,
    upc: string,
    caracteristicasPrincipais: CaracteristicasPrincipaisVinil
    outrasCaracteristicas: OutrasCaracteristicas
    statusVinil: statusVinil
    vinilImagem: VinilImagem[]
}