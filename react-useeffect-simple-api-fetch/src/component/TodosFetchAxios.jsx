import { useState, useEffect } from "react";

import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch todos.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Todos List</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <p><strong>Title:</strong> {todo.title}</p>
          <p>
            <strong>Status:</strong>{" "}
            {todo.completed ? "Completed ✔️" : "Not Completed ❌"}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
