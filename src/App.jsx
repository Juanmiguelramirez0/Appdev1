export default function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h1>Responding to Events</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
