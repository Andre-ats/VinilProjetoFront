import "./ListarVinils.css"
import SgDiscos from "../../Imagens/SgDiscos.png"
import { useEffect, useState } from "react";

export function ListarVinils(){

    const [vinils, setVinils] = useState<any>({ vinilList: [] });

    useEffect(() => {
        const fetchVinils = async () => {
          try {
            const response = await fetch('https://0.0.0.0:7048/UsuarioComprador/getTodosVinil');
            if (!response.ok) {
              throw new Error('Falha ao buscar vinis');
            }
            const data = await response.json();
            setVinils(data); // Define o estado dos vinis com os dados recebidos da API
          } catch (error) {
            console.error('Erro ao buscar vinis:', error);
          }
        };
    
        fetchVinils();
    }, []); // <= Array de dependências vazio para executar o efeito apenas uma vez

    return(
        <div className="visualizar-vinil-full">
            {vinils.vinilList && vinils.vinilList.map((item: any)=>(
                <div className="vinil-unitario" key={item.id}>
                    <div className="imagem-vinil">
                        <img width={100} height={120} src={SgDiscos} alt="" />
                    </div>
                    <div className="vinil-especificacoes">
                        <p style={{color:"white"}}>{item.nomeVinil}</p>
                        <p style={{color:"white"}}>{item.precoVinil}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
