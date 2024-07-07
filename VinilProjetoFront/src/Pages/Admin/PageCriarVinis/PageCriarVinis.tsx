import { useEffect, useState } from "react";
import { InputForms } from "../../../Components/Formulario/InputForms";
import { Layout } from "../../../Components/Layout/Layout";
import "./PageCriarVinis.css"
import { estiloMusical } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumEstiloMusical";
import { statusVinil } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumStatusVinil";
import { TipoDeEmbalagem } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumTipoDeEmbalagem";
import { IPostVinil, PostVinil } from "../../../API/Requests/Post/PostVinil";
import { BotaoEnvio } from "../../../Components/Formulario/BotaoEnvio";
import { tipoDeAlbum } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumTipoDeAlbum";
import { EnvioDeArquivo } from "../../../Components/EnvioDeArquivo/EnvioDeArquivo";
import { PostImagemVinil } from "../../../API/Requests/Post/PostImagemVinil";

export function PageCriarVinis(){

    const [dadosInformacoesVinil, setdadosInformacoesVinil] = useState([])
    const [dadosCaracteristicasPrincipais, setdadosCaracteristicasPrincipais] = useState([])
    const [dadosCaracteristicasSecundarias, setdadosCaracteristicasSecundarias] = useState([])

    const [foto, setFoto] = useState<File>()

    const [retornoAPI, setRetornoAPI] = useState()

    useEffect(()=>{
        if(retornoAPI){
            PostImagemVinil({ id: retornoAPI, file: foto! });
            console.log(foto)
            setRetornoAPI(undefined)
        }
    },[retornoAPI])

    const vinilObj:IPostVinil = {
        "nomeVinil": dadosInformacoesVinil![0],
        "descricaoVinil": dadosInformacoesVinil![1],
        "listaMusica": dadosInformacoesVinil![2],
        "precoVinil": dadosInformacoesVinil![3],
        "quantiaVinil": dadosInformacoesVinil![4],
        "upc": dadosInformacoesVinil![5],
        "caracteristicasPrincipaisDto": {
            "nomeArtista": dadosCaracteristicasPrincipais![0],
            "gravadora": dadosCaracteristicasPrincipais![1],
            "tipoDeAlbum": dadosCaracteristicasPrincipais![2],
            "anoLancamento": dadosCaracteristicasPrincipais![3],
            "tipoDeEmbalagem": dadosCaracteristicasPrincipais![4]
        },
        "outrasCaracteristicasDto": {
            "quantiaCancoes": dadosCaracteristicasSecundarias![0],
            "estiloMusical": dadosCaracteristicasSecundarias![1]
        },
        "statusVinil":dadosCaracteristicasSecundarias![2]
    }


    return(
        <Layout
            mostrarBarraInformacaoPagina
            mostrarHeader
            mostrarLogo
            mostrarPerfil
        >
            <div className="Criacao-Vinil-Todo">
                <div className="Criacao-Vinil-Dentro">
                    <div>
                        <h1>Informacoes Vinil</h1>
                        <InputForms
                            QuantiaElementoLinha={3}
                            Label = {["Nome Produto", "Descrição Produto", "Lista de Músicas", "Preço do Produto", "Quantidade de Produto", "UPC"]}
                            dadosState={dadosInformacoesVinil}
                            setDadosState={setdadosInformacoesVinil}
                        />
                    </div>
                    <div>
                        <h1>Caracteristicas principais</h1>
                        <InputForms
                            QuantiaElementoLinha={3}
                            Label = {["Nome do Artista", "Gravadora", "Tipo De Album", "Ano de Lancamento", "Tipo De Embalagem"]}
                            dadosState={dadosCaracteristicasPrincipais}
                            setDadosState={setdadosCaracteristicasPrincipais}
                            typeInput={["", "", "Enum", "", "Enum"]}
                            Enum={["","",tipoDeAlbum,"",TipoDeEmbalagem]}
                        />
                    </div>
                    <div>
                        <h1>Caracteristicas Secundarias</h1>
                        <InputForms
                            QuantiaElementoLinha={3}
                            Label = {["Quantia Cancoes","Estilo Musical", "Status Produto"]}
                            dadosState={dadosCaracteristicasSecundarias}
                            setDadosState={setdadosCaracteristicasSecundarias}
                            typeInput={["", "Enum", "Enum"]}
                            Enum={["",estiloMusical, statusVinil]}
                        />
                    </div>
                    <EnvioDeArquivo
                        setFoto={setFoto}
                    />
                    <BotaoEnvio
                        API={PostVinil}
                        nomeBotao="Enviar"
                        objetoEnviar={vinilObj}
                        retornoObj={setRetornoAPI}
                    />
                </div>
            </div>
        </Layout>
    )
}