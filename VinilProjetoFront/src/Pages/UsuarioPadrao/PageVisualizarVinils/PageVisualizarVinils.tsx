import { Fragment } from "react/jsx-runtime";
import { Layout } from "../../../Components/Layout/Layout";
import { ListarVinils } from "../../../Components/ListarVinils/ListarVinils";

export function VisualizarVinils(){
    return(
        <Layout
            mostrarHeader
            mostrarLogo
            mostrarCarrinho
            mostrarPerfil
            mostrarBarraInformacaoPagina
            mostrarBuscaDeVinils
            textoinformacaoBarraIndormacaoPagina="Visualizar Vinils"
        >
            <Fragment>
                <ListarVinils/>
            </Fragment>
        </Layout>
    )
}