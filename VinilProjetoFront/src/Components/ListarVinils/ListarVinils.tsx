import "./ListarVinils.css"
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

    const [vinis, setVinis] = useState<RetornoVinilList>({ vinilList: [] });
    useEffect(() => {
        const fetchVinis = async () => {
          await Get({
            URL: props.URL + "getTodosVinil",
            setCallback: setVinis,
            MensagemFalha: "Vinil nao encontrado"
          })
        };

        fetchVinis()
    }, []);

    

    console.log(vinis)


    return(
        <div>
            <h1 className="titulo-vinils">Vinis Geral:</h1>
            <div className="visualizar-vinil-full">
                {vinis.vinilList && vinis.vinilList.map((item: VinilList, key)=>(
                    <div key={key} className="vinil-unitario">
                        <div className="vinil-unitario-dentro">
                            <div className="img-vinil">
                                <img width={450} height={450} src={item.vinilImagem[0].rotaImagemVinil} alt="Imagem"/>
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
