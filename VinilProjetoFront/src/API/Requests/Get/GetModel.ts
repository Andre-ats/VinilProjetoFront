import { API_BASE } from "../../Api_Base";

interface Get{
    URL: String
    setCallback: (value: any) => void
    MensagemFalha?: string
}

export async function Get(props : Get){
    try {
            const response = await fetch(`${API_BASE}${props.URL}`);
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