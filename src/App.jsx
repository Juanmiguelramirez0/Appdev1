export default function App() {
  return (
    <div>
      <h1>Sharing Data</h1>
      <Child message="Hello from parent!" />
    </div>
  );
}

function Child({ message }) {
  return <p>{message}</p>;
}
