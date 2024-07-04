import { useEffect, useState } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { Get } from "../../../API/Requests/Get/GetModel";
import { IUsuarioComprador } from "../../../API/Interfaces/InterfaceUsuarioPadrao/UsuarioCompradorPerfil";
import { RecuperarToken } from "../../../API/Requests/Token/RecuperarToken";
import "./PagePerfil.css"
import Favorito from "../../../Imagens/Favorito.png"
import Contato from "../../../Imagens/Contato.png"
import Pedidos from "../../../Imagens/Pedidos.png"
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
                    NomeContainers={[perfil?.usuarioComprador.email!]}
                    Imagens={[Email, Favorito]} // Se nao quiser imagem coloque = "";
                    urlRedirecionamento={[""]}
                    QuantiaElementoLinha={1}
                />
                <div className="pedido-pagina-perfil-todo">
                    <div className="pedido-pagina-perfil-dentro">
                        Pedido
                    </div>
                </div>
                    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <div style={{width:"93%"}}>
                            <ShortCutContainer
                                NomeContainers={["Pedidos", "Favoritos", "Atendimento"]}
                                Imagens={[Pedidos, Favorito, Contato]} // Se nao quiser imagem coloque = "";
                                urlRedirecionamento={["/Pedidos", "/Favoritos", "/Atendimento"]}
                                QuantiaElementoLinha={3}
                            />
                        </div>
                    </div>
            </div> 
        </Layout>
    )
}