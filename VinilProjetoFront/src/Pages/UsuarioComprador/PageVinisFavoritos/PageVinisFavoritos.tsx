import { useEffect, useState } from "react";
import { ContainerVinil } from "../../../Components/ContainerVinil/ContainerVinil";
import { Layout } from "../../../Components/Layout/Layout";
import { Get } from "../../../API/Requests/Get/GetModel";
import { RecuperarToken } from "../../../API/Requests/Token/RecuperarToken";

export function PageVinisFavoritos(){

    const [vinisFavoritos, setvinisFavoritos] = useState<any>();
    const tokenRecuperar = RecuperarToken()

    useEffect(() => {
        const fetchVinis = async () => {
          await Get({
            URL:"UsuarioComprador/getVinisFavoritos",
            setCallback: setvinisFavoritos,
            MensagemFalha: "Vinis nao encontrados",
            token: tokenRecuperar
          })
        };

        fetchVinis()
    }, []);

    return(
        <Layout
            mostrarBarraInformacaoPagina
            mostrarCarrinho
            mostrarHeader
            mostrarLogo
            mostrarPerfil
            textoinformacaoBarraIndormacaoPagina="Vinis Favoritos"
        >
            <ContainerVinil VinilList={vinisFavoritos}/>
        </Layout>
    )
}