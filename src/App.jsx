const items = ["Apple", "Banana", "Orange"];

export default function App() {
  return (
    <div>
      <h1>Rendering Lists</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
