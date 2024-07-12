import { API_BASE } from "../../Api_Base";
import { RecuperarToken } from "../Token/RecuperarToken";

interface IPostImagemVinil {
    id: any;
    file: File;
}

export async function PostImagemVinil(props: IPostImagemVinil) {
    const tokenRecuperar = RecuperarToken();

    const formData = new FormData();
    formData.append('vinilID', props.id.vinilId);
    formData.append('file', props.file);

    try {
        const response = await fetch(`${API_BASE}Vinil/postImagemVinil`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokenRecuperar}`
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Erro ao cadastrar vinil:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
