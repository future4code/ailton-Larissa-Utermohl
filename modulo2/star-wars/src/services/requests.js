import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const getCharacterList = (saveData) => {
    axios.get(`${BASE_URL}/people`)
    .then((res) => saveData(res.data.results))
    .catch((err) => console.log(err.response))
}

export const getCharacter = (url, saveData) => {
    axios.get(url)
        .then((res) => saveData(res.data))
        .catch((err) => console.log(err.response))
}

export const getPlanet = (url, saveData) => {
    axios.get(url)
        .then((res) => saveData(res.data.name))
        .catch((err) => console.log(err.response))
}