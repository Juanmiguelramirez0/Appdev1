const user = {
  name: "Juan Miguel Ramirez",
  age: 20,
};

export default function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Hello World!</h1>
      <Welcome />
      <AboutMe />
      <StyledBox />
      <UserInfo />
    </div>
  );
}

function Welcome() {
  return <h2>Hello, I am Juan Miguel Ramirez</h2>;
}

function AboutMe() {
  return (
    <p>
      I am learning React and writing markup using <strong>JSX</strong>.
    </p>
  );
}

function StyledBox() {
  return (
    <div style={{ padding: "10px", backgroundColor: "lightgray", borderRadius: "5px" }}>
      This box is styled with CSS
    </div>
  );
}

function UserInfo() {
  return (
    <p>
      Name: {user.name}, Age: {user.age}
    </p>
  );
}
