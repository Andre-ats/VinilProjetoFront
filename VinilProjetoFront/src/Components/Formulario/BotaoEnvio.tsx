interface BotaoEnvio{
    objetoEnviar: any
    API: any
    nomeBotao: string
    retornoObj?: React.Dispatch<React.SetStateAction<undefined>>
}

export function BotaoEnvio(props: BotaoEnvio){

    async function EnvioObjApi(){
        const retorno = await props.API(props.objetoEnviar)
        props.retornoObj!(retorno)
    }

    return(
        <div className="botao-Login-Usuario">
            <button onClick={EnvioObjApi}>{props.nomeBotao}</button>
        </div>
    )
}