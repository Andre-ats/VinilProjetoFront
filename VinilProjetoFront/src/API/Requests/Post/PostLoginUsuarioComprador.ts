import { API_BASE } from "../../Api_Base";

export interface ILogin {
    email: string;
    senha: string;
}

export async function PostLoginUsuarioComprador(props: ILogin) {
    try {
        const response = await fetch(`${API_BASE}UsuarioComprador/loginUsuarioComprador`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: props.email, senha: props.senha })
        });

        if (response.ok) {
            const data = await response.json();
            // Faça algo com os dados de resposta, como armazenar o token de autenticação
            return data
        } else {
            console.error('Login failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
