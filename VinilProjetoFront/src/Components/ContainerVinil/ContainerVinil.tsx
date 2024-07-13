import { IListarVinilFavoritos } from "../../API/Interfaces/InterfaceUsuarioPadrao/VinisFavoritos"
import "./ContainerVinil.css"



export function ContainerVinil(props:IListarVinilFavoritos){

    return(
        <div>
            {props.VinilList?.listaVinisFavoritos?.map((item, key)=>(
                <div className="containerVinil-Todo">
                    <div className="containerVinil-dentro">
                        <div className="containerVinil-dentro-Imagem">
                            {item.vinilImagem.map((item)=>(
                                <img width={"100px"} height={"100px"} src={item.rotaImagemVinil} alt="" />
                            ))}
                        </div>
                        <div className="containerVinil-dentro-escrita">
                            <p className="containerVinil-dentro-escrita-nomeArtista">{item.caracteristicasPrincipais.nomeArtista}</p>
                            <p className="containerVinil-dentro-escrita-nomeVinil">{item.nomeVinil}</p>
                        </div>
                        <div className="containerVinil-dentro-preco">
                            <p>R${item.precoVinil}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )
}