function App() {
  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>JSX Rules Example</h1>
      <p>Remember: use <strong>className</strong> instead of <strong>class</strong></p>
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}

export default App;
