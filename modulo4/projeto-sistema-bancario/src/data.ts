export type transaction = {
    value: number
    date: Date
    description: string
}

export type client = {
    id: number;
    name: string;
    cpf: string;
    birthDate: Date;
    balance: number;
    statement: transaction[];
}
