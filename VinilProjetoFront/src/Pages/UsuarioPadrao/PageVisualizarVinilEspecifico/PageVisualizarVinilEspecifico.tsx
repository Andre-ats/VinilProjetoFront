import { Layout } from "../../../Components/Layout/Layout";
import { VisualizarVinilEspecifico } from "../../../Components/VisualizarVinilEspecifico/VisualizarVinilEspecifico";

export function PageVisualizarVinilEspecifico(){
    return(
        <Layout
            mostrarBuscaDeVinils
            mostrarCarrinho
            mostrarHeader
            mostrarLogo
            mostrarPerfil
        >
            <VisualizarVinilEspecifico/>
        </Layout>
    )
}