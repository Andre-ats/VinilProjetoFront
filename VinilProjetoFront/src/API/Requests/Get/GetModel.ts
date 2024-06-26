import { API_BASE } from "../../Api_Base";

interface Get{
    URL: String
    setCallback: (value: any) => void
    MensagemFalha?: string
    token?:string
}

export async function Get(props : Get){
    try {
            const response = await fetch(`${API_BASE}${props.URL}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`,
            },
            });
            if (!response.ok) {
                throw new Error(props.MensagemFalha);
            }
            const data = await response.json();
            props.setCallback(data);
        } 
    catch (error) 
    {

    }
}

interface GetParametro{
    URL: String
    setCallback: (value: any) => void
    MensagemFalha?: string
    parametro:string
    dados:any
}

export async function GetParametro(props : GetParametro){
    try {
            const response = await fetch(`${API_BASE}${props.URL}${props.parametro}`);
            if (!response.ok) {
                throw new Error(props.MensagemFalha);
            }
            const data = await response.json();
            props.setCallback([...props.dados, data]);
        } 
    catch (error) 
    {

    }
}