
import { Outlet, Link } from "react-router-dom";

export default function App() {   
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/todos">Todos</Link>
      </nav>
      <hr />
      <Outlet /> {}
    </div>
  );
}
