import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.API_REST_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})

export { api }