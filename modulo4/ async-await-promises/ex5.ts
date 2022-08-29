import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

type subscriber ={
    id: string,
    name: string,
    email: string
}

const createNews = async (news: any):Promise<void> => {
    axios.put(`${baseURL}/news`, news)
}

const getAllSubscribers = async (): Promise<subscriber[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

const getSubscribersIds = (subscribers: any): string[] => {
    return subscribers.map((subscriber: any) => {
        return subscriber.id
    })
}

const notifyAllSubscribers = async (ids: string[]):Promise<void> => {
    ids.push("idInexistente") // Colocando um id inexistente no vetor a ser utilizado
    for (const id of ids) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Olá, há uma nova notícia em nosso site"
            })
            console.log(`Notificação enviada a ${id}`)
        } catch (erro) {
            console.log(`Erro ao enviar para ${id}`)
        }
    }
}

const main = async ():Promise<void> => {
    try {
        createNews(news)
        const subscribers = await getAllSubscribers()
        const subscribersIds = getSubscribersIds(subscribers)
        await notifyAllSubscribers(subscribersIds)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()