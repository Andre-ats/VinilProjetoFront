import { useNavigate } from "react-router-dom"
import { saveToken } from "../../API/Requests/Token/SalvarToken"

interface BotaoEnvio{
    objetoEnviar: any
    API: any
    nomeBotao: string
    retornoObj?: React.Dispatch<React.SetStateAction<undefined>>
    ulrRedirecionamento?: any 
}

export function BotaoEnvio(props: BotaoEnvio){

    const navigate = useNavigate()

    async function EnvioObjApi(){

        try {
            const retorno = await props.API(props.objetoEnviar)

            if (retorno){
                props.retornoObj!(retorno)
                navigate(props.ulrRedirecionamento)
            }
            else{
                console.error("");
            }   
        } catch (error) {
            
        }

    }

    return(
        <div className="botao-Login-Usuario">
            <button onClick={EnvioObjApi}>{props.nomeBotao}</button>
        </div>
    )
}

export function BotaoEnvioLogin(props:BotaoEnvio){
    const navigate = useNavigate()

    async function EnvioObjApi(){
        const retorno = await props.API[0](props.objetoEnviar)

        if (retorno){
            props.retornoObj!(retorno)
            saveToken(retorno);
            navigate(props.ulrRedirecionamento[0])
        }
        else{
            const retorno02 = await props.API[1](props.objetoEnviar)
            if(retorno02){
                props.retornoObj!(retorno02)
                saveToken(retorno02);
                navigate(props.ulrRedirecionamento[1])
            }else{
                console.log("Error!")
            }
        }

    }

    return(
        <div className="botao-Login-Usuario">
            <button onClick={EnvioObjApi}>{props.nomeBotao}</button>
        </div>
    )
}