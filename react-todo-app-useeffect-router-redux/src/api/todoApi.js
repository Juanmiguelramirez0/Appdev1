import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const FetchTodos = () => {
    return axios.get('${API}/todos?_limit=5');

};