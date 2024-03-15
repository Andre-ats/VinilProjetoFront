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
        <div className="visualizar-vinil-full">
            {vinils.vinilList && vinils.vinilList.map((item: VinilList)=>(
                <div className="vinil-unitario" key={item.id}>
                    <div className="imagem-vinil">
                        <img width={100} height={120} src={SgDiscos} alt="" />
                    </div>
                    <div className="vinil-especificacoes">
                        <p style={{color:"white"}}>{item.nomeVinil}</p>_
                        <p style={{color:"white"}}>{item.precoVinil}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
