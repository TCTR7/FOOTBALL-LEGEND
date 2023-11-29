import axios from "axios"

const baseApiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default baseApiClient;