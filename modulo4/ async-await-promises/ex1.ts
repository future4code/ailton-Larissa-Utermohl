import axios from "axios"
import { baseURL } from "./baseURL"
//tail -n5 pkmns.txt | grep "charmano"

// axios.get(`${baseURL}/subscribers`)
//     .then((res) => {console.log(res.data)})
// console.log("Fazendo outras coisas")
// const testeAwait = async () =>{
//     const resp = await axios.get(`${baseURL}/subscribers`)
//     console.log(resp.data)
//     console.log("Fazendo outras coisas")
// }
// testeAwait()
axios.get(`${baseURL}/subscribers`)
    .then(res=> res.data)
    .then(console.log)
