import axios from "axios";
import { Hero } from "./types/heroes";

const getHeroes = async (): Promise<Hero> => {
    const response = await axios.get("/heroes");
    return response.data ;
}

