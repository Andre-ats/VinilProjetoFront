import { Fragment } from "react/jsx-runtime"
import "./ShortCutContainer.css"

interface IShortCutContainer{
    Imagens?: string[] | undefined
    NomeContainers: string[]
    QuantiaElementoLinha: number
}


export function ShortCutContainer(props: IShortCutContainer){
    return(
        <Fragment>
            <div className="shortcut-container-todo" style={{
                display: "grid",
                gridTemplateColumns: `repeat(${props.QuantiaElementoLinha ?? 2}, 2fr)`,
                width:"100%",
            }}>
                {props.NomeContainers.map((item, key)=>(
                <div className="shortcut-container">
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