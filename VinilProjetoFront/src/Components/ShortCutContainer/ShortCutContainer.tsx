import { Fragment } from "react/jsx-runtime"
import "./ShortCutContainer.css"
import { useNavigate } from "react-router-dom"

interface IShortCutContainer{
    Imagens?: string[] | undefined
    NomeContainers: string[]
    QuantiaElementoLinha: number
    urlRedirecionamento?: string[] | undefined
}


export function ShortCutContainer(props: IShortCutContainer){

    const navigate = useNavigate()

    function redirecionamento(key:number){
        if(props.urlRedirecionamento![key] != ""){
            navigate(props.urlRedirecionamento![key])
        }
    }

    return(
        <Fragment>
            <div className="shortcut-container-todo" style={{
                display: "grid",
                gridTemplateColumns: `repeat(${props.QuantiaElementoLinha ?? 2}, 2fr)`,
                width:"100%",
            }}>
                {props.NomeContainers.map((item, key)=>(
                <div className="shortcut-container" 
                style={{
                    cursor: 
                        props.urlRedirecionamento && props.urlRedirecionamento[key] != "" 
                            ? "pointer"
                            : "default"
                }} 
                onClick={()=>redirecionamento(key)}>
                    {props.Imagens![key] != "" && // Se nao quiser imagem coloque = "";
                        <img src={props.Imagens![key]} width={"25px"} height={"25px"}/>
                    }
                    <p>{props.NomeContainers[key]}</p>
                </div>
                ))}
            </div>
        </Fragment>
    )
}