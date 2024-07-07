import { useState } from "react";
import { InputForms } from "../../../Components/Formulario/InputForms";
import { Layout } from "../../../Components/Layout/Layout";
import "./PageCriarVinis.css"
import { estiloMusical } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumEstiloMusical";
import { statusVinil } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumStatusVinil";
import { TipoDeEmbalagem } from "../../../API/Interfaces/InterfaceUsuarioPadrao/EnumTipoDeEmbalagem";

export function PageCriarVinis(){

    const [dados, setDados] = useState()

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
                            dadosState={dados}
                            setDadosState={setDados}
                        />
                    </div>
                    <div>
                        <h1>Caracteristicas principais</h1>
                        <InputForms
                            QuantiaElementoLinha={3}
                            Label = {["Nome do Artista", "Gravadora", "Tipo De Album", "Ano de Lancamento", "Tipo De Embalagem"]}
                            dadosState={dados}
                            setDadosState={setDados}
                            typeInput={["", "", "", "", "Enum"]}
                            Enum={["","","","",TipoDeEmbalagem]}
                        />
                    </div>
                    <div>
                        <h1>Caracteristicas Secundarias</h1>
                        <InputForms
                            QuantiaElementoLinha={3}
                            Label = {["Quantia Cancoes","Estilo Musical", "Status Produto"]}
                            dadosState={dados}
                            setDadosState={setDados}
                            typeInput={["", "Enum", "Enum"]}
                            Enum={["",estiloMusical, statusVinil]}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}