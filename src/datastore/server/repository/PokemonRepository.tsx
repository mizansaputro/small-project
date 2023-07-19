import { baseApi } from "@utils/api";
import axios from "axios";

const URL = {
    base_url: "https://pokeapi.co/api/v2/",
    pokemon_list: "pokemon/",
};

export const getListPokemon = async ({
    limit = 9,
    offset = 0,
}): Promise<any> => {
    return (await baseApi(URL.base_url)).v1.get(URL.pokemon_list, {
        params: { limit, offset },
    });
};

export const getPokemonItems = async (limit:number, offset:number): Promise<any> => {
    return await axios.get(`${URL.base_url}${URL.pokemon_list}?limit=${limit}&offset=${offset}`)
        .then((res) => {return res.data})
        .catch((error) => console.log(error));
}

export const getPokemonItem = async (name:string): Promise<any> => {
    return await axios.get(`${URL.base_url}${URL.pokemon_list}${name}`)
        .then((res) => {return res.data})
        .catch((error) => console.log(error));
}