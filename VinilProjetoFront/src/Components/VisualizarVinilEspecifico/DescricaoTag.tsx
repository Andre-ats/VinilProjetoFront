import { useAppSelector } from "../../Store/Types"
import "./DescricaoTag.css"

export function DescricaoTag(){

    const vinilDado = useAppSelector(state => state.vinilVisualizar)

    return(
        <div className="VinilDescricaoTagToda">
            <div className="VinilDescricaoTagDentro">
                <p className="VinilDescricaoTagAba">Descrição</p>
                <p className="VinilDescricaoTag-Descricao">{vinilDado.descricaoVinil}</p>
            </div>
        </div>
    )
}