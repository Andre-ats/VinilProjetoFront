import { tipoDeAlbum } from "./EnumTipoDeAlbum";
import { TipoDeEmbalagem } from "./EnumTipoDeEmbalagem";

export interface CaracteristicasPrincipaisVinil{
    nomeArtista: string,
    gravadora: string,
    tipoDeAlbum: tipoDeAlbum,
    anoLancamento: string,
    tipoDeEmbalagem: TipoDeEmbalagem
}