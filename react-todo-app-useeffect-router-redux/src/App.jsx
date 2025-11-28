// src/App.jsx
import { Outlet, Link } from "react-router-dom";

export default function App() {   // <-- default export is required
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/todos">Todos</Link>
      </nav>
      <hr />
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
