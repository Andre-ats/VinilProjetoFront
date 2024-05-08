import { Fragment } from "react/jsx-runtime"
import { useAppSelector } from "../../Store/Types"

export function VisualizarVinilEspecifico(){

    const vinilDado = useAppSelector(state => state.vinilVisualizar)
    console.log(vinilDado)

    return(
        <Fragment>
            <div>
                <img src={vinilDado.vinilImagem[0].rotaImagemVinil} alt="" />
            </div>
        </Fragment>
    )
}