import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../features/todos/todosSlice.js";

export default function Todos() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.todos);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (!items.length) dispatch(getTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const handleUpdate = (todo) => {
    const updatedTitle = prompt("Edit Todo:", todo.title);
    if (updatedTitle) dispatch(updateTodo({ ...todo, title: updatedTitle }));
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this todo?")) dispatch(deleteTodo(id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Todos</h1>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="New Todo" />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {Array.isArray(items) && items.map(todo => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => handleUpdate(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}