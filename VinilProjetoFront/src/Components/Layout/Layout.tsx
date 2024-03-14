import { Fragment } from "react/jsx-runtime";
import "./Layout.css"
import SgDiscosImagem from "../../Imagens/SgDiscos.jpeg"
import CarrinhoImagem from "../../Imagens/Carrinho.png"
import PerfilImagem from "../../Imagens/Perfil.png"
import { useNavigate } from "react-router-dom";

interface ILayout{
    mostrarHeader?: boolean | null
    mostrarLogo?: boolean | null
    mostrarCarrinho?: boolean | null
    mostrarPerfil?: boolean | null
    mostrarBarraInformacaoPagina?: boolean | null
    TextoinformacaoBarraIndormacaoPagina?: string
}

export function Layout(props : ILayout){

    const navigate = useNavigate()

    return(
        <Fragment>
            {props.mostrarHeader && 
                <div className="header-full">
                    <div className="header-esquerda">
                        {props.mostrarLogo && 
                            <img src={SgDiscosImagem} width={100}/>
                        }
                    </div>
                    <div className="header-direita">
                        {props.mostrarCarrinho && 
                            <img style={{cursor:"pointer"}} src={CarrinhoImagem} width={50} onClick={()=>navigate("/Carrinho")}/>
                        }
                        {props.mostrarPerfil &&
                            <img style={{cursor:"pointer"}} src={PerfilImagem} width={50}/>
                        }
                    </div>
                </div>
            }
            {props.mostrarBarraInformacaoPagina &&
                <div className="barra-informacao-Pagina">
                    <div className="barra-informacao-Pagina-dentro">
                        <p style={{color:"white"}}>{props.TextoinformacaoBarraIndormacaoPagina}</p>
                    </div>
                </div>
            }
        </Fragment>
    )
}