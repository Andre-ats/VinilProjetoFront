import "./ListarVinils.css"
import SgDiscos from "../../Imagens/SgDiscos.png"
import { useEffect, useState } from "react";
import { Get } from "../../API/Requests/Get/GetModel";
import { VinilList } from "../../API/Interfaces/InterfaceUsuarioPadrao/VinilList";

interface ListarVinils{
    URL: string
}

interface RetornoVinilList{
    vinilList: VinilList[]
}

export function ListarVinils(props : ListarVinils){

    const [vinils, setVinils] = useState<RetornoVinilList>({ vinilList: [] });

    useEffect(() => {
        const fetchVinils = async () => {
          await Get({
            URL: props.URL,
            setCallback: setVinils,
            MensagemFalha: "Vinil nao encontrado"
          })
        };
    
        fetchVinils();
    }, []);

    return(
        <div>
            <h1 className="titulo-vinils">Vinils Geral:</h1>
            <div className="visualizar-vinil-full">
                {vinils.vinilList && vinils.vinilList.map((item: VinilList, key)=>(
                    <div key={key} className="vinil-unitario">
                        <div className="vinil-unitario-dentro">
                            <div className="img-vinil">
                                <img src={SgDiscos} alt="" />
                            </div>
                            <div className="especificacoes-vinil">
                                <div className="nome-vinil">
                                    <h2>{item.nomeVinil}</h2>
                                </div>
                                <div className="preco-vinil">
                                    <h2>R$ {item.precoVinil}</h2>
                                </div>
                                <div className="botao-adicionar-carrinho">
                                    <button>Adicionar no Carrinho</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
