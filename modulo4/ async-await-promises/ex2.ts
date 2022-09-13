import axios from "axios"
import { baseURL } from "./baseURL"

// axios.get(`${baseURL}/subscribers/idInvalido/notifications`)
//     .then(res=> res.data)
//     .then(console.log)
//     .catch(erro => console.log(erro.message))

// let a:any
// console.log(a?.length)//null safety

axios.get(`${baseURL}/subscribers/idInvalido/notifications`)
    .then(res => res.data)
    .then(console.log)
    .catch(erro => erro.response?.data || erro.message)
    .then(console.log)
