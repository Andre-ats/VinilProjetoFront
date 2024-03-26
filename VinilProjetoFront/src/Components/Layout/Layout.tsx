import { Fragment } from "react/jsx-runtime";
import "./Layout.css"
import SgDiscosImagem from "../../Imagens/SgDiscos.png"
import CarrinhoImagem from "../../Imagens/Carrinho.png"
import PerfilImagem from "../../Imagens/Perfil.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ILayout{
    mostrarHeader?: boolean | null
    mostrarLogo?: boolean | null
    mostrarCarrinho?: boolean | null
    mostrarPerfil?: boolean | null
    mostrarBarraInformacaoPagina?: boolean | null
    mostrarBuscaDeVinils?: boolean | null
    textoinformacaoBarraIndormacaoPagina?: string
    children?: JSX.Element;
    
}

export function Layout(props : ILayout){

    const [abreTab, setAbreTab] = useState(true)

    function abrirTab(){
        if(abreTab == true){
            setAbreTab(false)
        }else{
            setAbreTab(true)
        }
    }

    const enumEstiloMusica = 
    [
        "Rock",
        "Blues",
        "Pop",
        "Jazz",
        "Hip Hop",
        "Eletronica",
        "RB",
        "Reggae",
        "Rap",
        "Trap"
    ]

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
            <div className="main-full">
                <div className="main-dentro">
                    {props.mostrarBarraInformacaoPagina &&
                        <div className="barra-informacao-Pagina">
                            <div className="barra-informacao-Pagina-dentro">
                                <p style={{color:"black"}}>{props.textoinformacaoBarraIndormacaoPagina}</p>
                            </div>
                        </div>
                    }
                    <div style={{display:"flex"}}>
                        {props.mostrarBuscaDeVinils && 
                            <div className="busca-de-vinils-full">
                                <div className="busca-de-vinil">
                                    <h2 style={{cursor:"pointer", userSelect:"none"}} onClick={abrirTab}> {"> Vinils"}</h2>
                                    {abreTab && 
                                        <Fragment>
                                            {enumEstiloMusica.map((vinilEnum, key)=>(
                                                <div className="vinilEnumItem" key={key}>
                                                    -{vinilEnum}
                                                </div>
                                            ))}
                                        </Fragment>
                                    }
                                    <h2 style={{cursor:"pointer", userSelect:"none"}}> {"> Preço"}</h2>
                                    <div style={{display:"flex"}}>
                                        <input style={{width:"20%", marginLeft:"22px"}} type="number" placeholder="Min..."/>
                                        <input style={{width:"20%", marginLeft:"22px"}} type="number" placeholder="Max..."/>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="children-full">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}