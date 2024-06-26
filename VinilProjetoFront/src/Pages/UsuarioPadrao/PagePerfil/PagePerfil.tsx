import { Fragment, useEffect, useState } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { Get } from "../../../API/Requests/Get/GetModel";
import { IUsuarioComprador } from "../../../API/Interfaces/InterfaceUsuarioPadrao/UsuarioCompradorPerfil";
import { RecuperarToken } from "../../../API/Requests/Token/RecuperarToken";

export function PagePerfil(){

    const [perfil, setPerfil] = useState<IUsuarioComprador>();
    const tokenRecuperar = RecuperarToken()

    useEffect(() => {
        const fetchVinis = async () => {
          await Get({
            URL:"UsuarioComprador/getUsuarioCompradorPerfil",
            setCallback: setPerfil,
            MensagemFalha: "Perfil nao encontrado",
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
            textoinformacaoBarraIndormacaoPagina="Perfil" 
        >
            <Fragment>
                {perfil?.usuarioComprador?.email}
            </Fragment>
        </Layout>
    )
}