import { useEffect, useState } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { IUsuarioComprador } from "../../../API/Interfaces/InterfaceUsuarioPadrao/UsuarioCompradorPerfil";
import { RecuperarToken } from "../../../API/Requests/Token/RecuperarToken";
import { Get } from "../../../API/Requests/Get/GetModel";
import { ShortCutContainer } from "../../../Components/ShortCutContainer/ShortCutContainer";
import Email from "../../../Imagens/EmailIcon.png"
import { BotaoEnvio } from "../../../Components/Formulario/BotaoEnvio";
import { IEmailDuvida, PostEmailDuvidaUsuarioComprador } from "../../../API/Requests/Post/PostEmailDuvidaUsuarioComprador";

export function PageAtendimento(){

    const [perfil, setPerfil] = useState<IUsuarioComprador>();
    const [mensagem, setMensagem] = useState("");
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

    const handleChange = (event:any) => {
        setMensagem(event.target.value);
    };

    const emailObj: IEmailDuvida = {
        conteudo:mensagem
    }

    return(
        <Layout
            mostrarBarraInformacaoPagina
            mostrarCarrinho
            mostrarHeader
            mostrarLogo
            mostrarPerfil
            textoinformacaoBarraIndormacaoPagina="Atendimento"
        >
            <div style={{width:"100%"}}>
            <ShortCutContainer
                NomeContainers={[perfil?.usuarioComprador.email!]}
                QuantiaElementoLinha={1}
                Imagens={[Email]}
            />
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{width:"90%", marginTop:"30px"}}>
                        <textarea
                            placeholder="Qual sua dúvida..."
                            style={{ width: "100%", resize: "none", height: "500px" }}
                            value={mensagem}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"end", alignItems:"center"}}>
                    <div style={{width:"43%", marginTop:"30px"}}>
                        <BotaoEnvio
                            API={PostEmailDuvidaUsuarioComprador}
                            nomeBotao="Enviar"
                            objetoEnviar={emailObj} 
                            ulrRedirecionamento={"/Perfil"}
                        />
                    </div>
                </div>
            </div>
        </Layout>           
    )
}