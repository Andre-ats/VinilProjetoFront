import { Fragment } from "react/jsx-runtime";
import "./Layout.css"
import SgDiscosImagem from "../../Imagens/SgDiscos.png"
import CarrinhoImagem from "../../Imagens/Carrinho.png"
import PerfilImagem from "../../Imagens/Perfil.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RecuperarToken } from "../../API/Requests/Token/RecuperarToken";
import { RemoverToken } from "../../API/Requests/Token/RemoverToken";

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
    const token = RecuperarToken();

    function redirecionarLogin(){
        if(token !== undefined){
            navigate("/Perfil")
        }
        else{
            navigate("/Login")
        }
    }

    function abrirTab(){
        if(abreTab == true){
            setAbreTab(false)
        }else{
            setAbreTab(true)
        }
    }

    function sairConta(){
        RemoverToken()
        navigate("/VisualizarVinis")
        window.location.reload()
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
                            <img style={{cursor:"pointer"}} src={SgDiscosImagem} width={100} onClick={()=>navigate("/VisualizarVinis")}/>
                        }
                    </div>
                    <div className="header-direita">
                        {props.mostrarCarrinho && 
                            <img style={{cursor:"pointer"}} src={CarrinhoImagem} width={50} onClick={()=>navigate("/Carrinho")}/>
                        }
                        {props.mostrarPerfil &&
                            <img style={{cursor:"pointer"}} src={PerfilImagem} width={50} onClick={redirecionarLogin}/>
                        }
                        {token &&
                        <div className="acessoconta-sairconta">
                            <p className="acessoconta-sairconta-hover" style={{cursor:"pointer"}} onClick={redirecionarLogin} >Minha Conta</p>
                            <p className="acessoconta-sairconta-hover" style={{cursor:"pointer"}} onClick={sairConta}>Sair</p>
                        </div>
                        }
                        {!token &&
                        <div className="acessoconta-sairconta">
                            <div style={{display:"flex"}}>
                                <p style={{marginRight:"5px"}} >Faça o </p>
                                <p onClick={redirecionarLogin} className="acessoconta-sairconta-hover" style={{marginRight:"5px", cursor:"pointer"}}>Login </p>
                                <p>ou</p>
                            </div>
                            <p className="acessoconta-sairconta-hover" style={{cursor:"pointer"}} onClick={sairConta}>Cadastre</p>
                        </div>
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
                                    <h2 style={{cursor:"pointer", userSelect:"none"}} onClick={abrirTab}> {"> Vinis"}</h2>
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