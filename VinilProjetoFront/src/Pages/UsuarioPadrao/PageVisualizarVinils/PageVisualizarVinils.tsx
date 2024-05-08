import { Fragment } from "react/jsx-runtime";
import { Layout } from "../../../Components/Layout/Layout";
import { ListarVinils } from "../../../Components/ListarVinils/ListarVinils";

export function VisualizarVinis(){
    return(
        <Layout
            mostrarHeader
            mostrarLogo
            mostrarCarrinho
            mostrarPerfil
            mostrarBarraInformacaoPagina
            mostrarBuscaDeVinils
            textoinformacaoBarraIndormacaoPagina="Visualizar Vinis"
        >
            <Fragment>
                <ListarVinils
                    URL="Vinil/"
                />
            </Fragment>
        </Layout>
    )
}