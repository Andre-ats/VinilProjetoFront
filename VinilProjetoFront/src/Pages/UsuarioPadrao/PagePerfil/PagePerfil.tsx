import { useEffect, useState } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { Get } from "../../../API/Requests/Get/GetModel";
import { IUsuarioComprador } from "../../../API/Interfaces/InterfaceUsuarioPadrao/UsuarioCompradorPerfil";
import { RecuperarToken } from "../../../API/Requests/Token/RecuperarToken";
import "./PagePerfil.css"
import Favorito from "../../../Imagens/Favorito.png"
import Email from "../../../Imagens/EmailIcon.png"
import { ShortCutContainer } from "../../../Components/ShortCutContainer/ShortCutContainer";

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
            <div className="pagina-perfil-toda">
                <ShortCutContainer
                    NomeContainers={[perfil?.usuarioComprador.email!, "Vinis Favoritos"]}
                    Imagens={[Email, Favorito]} // Se nao quiser imagem coloque = "";
                    QuantiaElementoLinha={2}
                />
            </div> 
        </Layout>
    )
}