enum IStatus{
    Ativo,
    Inativo,
    Vazio
}

export interface IUsuarioComprador {
    usuarioComprador: {
        email: string,
        senha: string,
        status: IStatus,
        telefone: {
        codigo: string,
        ddd: string,
        numero: string
        },
        endereco: {
        cep: string,
        logradouro: string,
        numero: string,
        complemento: string,
        referencia: string,
        bairro: string,
        cidade: string,
        estado: string
        },
        id: string
    }
}