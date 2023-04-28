import axios from "axios"

export const axiosFetch = axios.create({
    baseURL: 'https://api-empresas.onrender.com',
    timeout: 20000
})