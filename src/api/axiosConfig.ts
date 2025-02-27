import axios from "axios";


export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.API_KEY,
    },
    timeout: 10000,
    
});