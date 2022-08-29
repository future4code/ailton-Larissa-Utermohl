import { client } from "./data";

export const clients: client[] = [
    {
        id: 1,
        name: "João",
        cpf: "123.456.789-01",
        birthDate: new Date("1990-01-01"),
        balance: 1200,
        statement: []
    },
    {
        id: 2,
        name: "Maria",
        cpf: "123.456.789-02",
        birthDate: new Date("1990-01-01"),
        balance: 2500,
        statement: []
    }
]