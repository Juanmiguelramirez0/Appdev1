import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getTodos } from "../features/todos/todosSlice";
import TodoItem from "./TodoItem";


export default function Todolist () {
    const dispatch = useDispatch ();
    const { items, loading} = useSelector ((state) => state.todos);

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            {items.map ((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}