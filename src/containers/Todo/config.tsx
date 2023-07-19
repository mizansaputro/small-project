import axios from "axios";
import { TodoItemInterface } from "./interface";

export const getTodosData = async (): Promise<TodoItemInterface[]> => {
    return await axios.get('http://localhost:3004/todos')
        .then((res) => {return res.data})
        .catch((error) => console.log(error));
}

