import { API_BASE } from "../../Api_Base";
import { RecuperarToken } from "../Token/RecuperarToken";

export interface IEmailDuvida{
    conteudo: string
}

export async function PostEmailDuvidaUsuarioComprador(props: IEmailDuvida){

    const tokenRecuperar = RecuperarToken();

    try {
        const response = await fetch(`${API_BASE}UsuarioComprador/postEmailDuvida`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenRecuperar}`
            },
            body: JSON.stringify({ conteudo: props.conteudo })
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Erro ao mandar email:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}