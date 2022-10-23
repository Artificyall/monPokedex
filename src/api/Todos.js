import axios from "axios";

/*const API_URL = 'https://jsonplaceholder.typicode.com/';

export async function getTodos() {
    try{
        const { data } = await axios.get(`${API_URL}todos`);
        return data;
    } catch(error) {
        console.log(error);
    }
}

export async function getTodoById(id) {
    try{
        const { data } = await axios.get(`${API_URL}todos/${id}`);
        return data;
    } catch(error) {
        console.log(id);
    }
}*/

const API_POKE = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokes() {
    try{
        const { data } = await axios.get(`${API_POKE}?limit=151`);
        return data.results;
    } catch(error) {
        console.log(error);
    }
}

export async function getPokeById(id) {
    try{
        const { data } = await axios.get(`${API_POKE}/${id}`);
        return data;
    } catch(error) {
        console.log(error);
    }
}