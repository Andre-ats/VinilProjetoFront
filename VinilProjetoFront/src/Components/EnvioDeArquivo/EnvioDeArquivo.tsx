import { useState } from "react";

interface IEnvioDeArquivo{
    setFoto: any
}

export function EnvioDeArquivo(props: IEnvioDeArquivo){

    const [, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            props.setFoto(file)
        }
    };

    return(
        <div>
            <input onChange={handleFileChange} type="file" />
        </div>
    )
}