import { IListarVinilFavoritos } from "../../API/Interfaces/InterfaceUsuarioPadrao/VinisFavoritos"
import "./ContainerVinil.css"



export function ContainerVinil(props:IListarVinilFavoritos){

    return(
        <div>
            {props.VinilList?.listaVinisFavoritos?.map((item, map)=>(
                <div className="containerVinil-Todo">
                    <div className="containerVinil-dentro">
                        {item.nomeVinil}
                    </div>
                </div>
            ))}
        </div>
        
    )
}