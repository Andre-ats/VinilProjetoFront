import { Fragment } from "react/jsx-runtime"
import { useAppSelector } from "../../Store/Types"
import "./VisualizarVinilEspecifico.css"
import { DescricaoTag } from "./DescricaoTag"

export function VisualizarVinilEspecifico(){

    const vinilDado = useAppSelector(state => state.vinilVisualizar)

    return(
        <Fragment>
            <div className="VisualizarVinilEspecificoTudo">
                <div className="VisualizarVinilEspecificoInformacoesPrincipais">
                    <div className="VisualizarVinilEspecificoImagem">
                        <img className="VisualizarVinilEspecificoImagem-Principal" src={vinilDado.vinilImagem[0].rotaImagemVinil}/>
                    </div>
                    <div className="VisualizarVinilEspecificoInformacoes">
                        <h2 className="VisualizarVinilEspecificoInformacoes-Especificacoes">Vinil: {vinilDado.nomeVinil}</h2>
                        <h2 className="VisualizarVinilEspecificoInformacoes-Especificacoes">Quantidade: {vinilDado.quantiaVinil} peça(s)</h2>
                        <h2 className="VisualizarVinilEspecificoInformacoes-Especificacoes">Preço: R$ {vinilDado.precoVinil}</h2>
                        <div className="VisualizarVinilEspecificoInformacoes-botaoComprar">
                            <button><p>Comprar Vinil</p></button>
                        </div>
                    </div>
                </div>
                <DescricaoTag />
            </div>
        </Fragment>
    )
}