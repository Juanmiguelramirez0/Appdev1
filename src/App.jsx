const isLoggedIn = true;

export default function App() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}
