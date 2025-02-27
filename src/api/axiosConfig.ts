import axios from "axios";
import { BASE_URL, WEB_API_KEY } from "./constants";

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": WEB_API_KEY,
    },
    timeout: 10000,
    
});