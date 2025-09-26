export default function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Hello World!</h1>
      <Welcome />
      <AboutMe />
      <StyledBox />
    </div>
  );
}

function Welcome() {
  return <h2>Hello, I am Juan Miguel Ramirez</h2>;
}

function AboutMe() {
  return (
    <p>
      I am learning React<strong>JSX</strong>.
    </p>
  );
}

function StyledBox() {
  return (
    <div style={{ padding: "10px", backgroundColor: "lightgray", borderRadius: "5px" }}>
      This box is styled with CSS inline
    </div>
  );
}
