import { API_BASE } from "../../Api_Base";
import { RecuperarToken } from "../Token/RecuperarToken";

interface ICaracteristicasPrincipaisDto {
    nomeArtista: string;
    gravadora: string;
    tipoDeAlbum: string; 
    anoLancamento: string;
    tipoDeEmbalagem: string; 
}

interface IOtrasCaracteristicasDto {
    quantiaCancoes: string;
    estiloMusical: string; 
}

export interface IPostVinil {
    nomeVinil: string;
    descricaoVinil: string;
    listaMusica: string;
    precoVinil: string;
    quantiaVinil: string;
    upc: string;
    caracteristicasPrincipaisDto: ICaracteristicasPrincipaisDto;
    outrasCaracteristicasDto: IOtrasCaracteristicasDto;
    statusVinil: string; 
}



export async function PostVinil(props: IPostVinil){
    const tokenRecuperar = RecuperarToken();

    try {
        const response = await fetch(`${API_BASE}Vinil/postCadastrarVinil`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenRecuperar}`
            },
            body: JSON.stringify( props )
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Erro ao cadastrar vinil:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}