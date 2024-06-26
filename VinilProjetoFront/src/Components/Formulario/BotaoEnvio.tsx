import { useNavigate } from "react-router-dom"

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
        const retorno = await props.API(props.objetoEnviar)
        props.retornoObj!(retorno)
        navigate(props.ulrRedirecionamento)
    }

    return(
        <div className="botao-Login-Usuario">
            <button onClick={EnvioObjApi}>{props.nomeBotao}</button>
        </div>
    )
}