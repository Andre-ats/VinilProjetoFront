import { VinilList } from "./VinilList";

export interface IListarVinilFavoritos{
    VinilList:IVinilList
}

interface IVinilList{
    listaVinisFavoritos: VinilList[]
}