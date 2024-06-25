import { useNavigate } from "react-router-dom";
import { InputForms } from "../../../Components/Formulario/InputForms";
import { Layout } from "../../../Components/Layout/Layout";
import "./PageLogin.css"
import { BotaoEnvio } from "../../../Components/Formulario/BotaoEnvio";
import { useState } from "react";
import { ILogin, PostLoginUsuarioComprador } from "../../../API/Requests/Post/PostLoginUsuarioComprador";

export function PageLogin(){

    const[retornoApi, setRetornoApi] = useState()
    const[dadosInput, setDadosInput] = useState([])

    const loginObj: ILogin = {
        email:dadosInput![0],
        senha:dadosInput![1]
    }

    const navigate = useNavigate()

    function CadastrarNavigate(){
        navigate("/")
    }


    return(
        <Layout
            mostrarBarraInformacaoPagina
            mostrarCarrinho
            mostrarHeader
            mostrarLogo
            textoinformacaoBarraIndormacaoPagina="Login" 
        >
            <div className="sessao-login-inteiro">
                <div className="sessao-login-dentro">
                    <div className="sessao-login-dentro-esquerda">
                        <h1>Login:</h1>
                    </div>
                    <div className="sessao-login-dentro-direita">
                        <InputForms Label={["Email", "Senha"]} typeInput={["email", "password"]} QuantiaElementoLinha={1} dadosState={dadosInput} setDadosState={setDadosInput}/>
                        <div style={{display:"flex"}}>
                            <p>Ainda não possui uma conta?</p>
                            <p onClick={CadastrarNavigate} style={{textDecoration:"underline", color:"hotpink", marginLeft:"5px", cursor:"pointer"}}>Cadastrar-se</p>
                        </div>
                        <BotaoEnvio API={PostLoginUsuarioComprador} objetoEnviar={loginObj} nomeBotao="Entrar" retornoObj={setRetornoApi}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}