<<<<<<< HEAD
import FirstComponent from "./components/FirstComponent";
import MultiComponent from "./components/MultiComponent";
import MarkupExample from "./components/MarkupExample";
import CurlyBracesExample from "./components/CurlyBracesExample";
import PropsExample from "./components/PropsExample";
import ConditionalExample from "./components/ConditionalExample";
import MultipleRenderExample from "./components/MultipleRenderExample";
import PureComponentExample from "./components/PureComponentExample";
import UITreeExample from "./components/UITreeExample";
=======
<<<<<<< HEAD
import "./App.css";
import Gallery from "./components/Gallery";
import TodoList from "./components/ToDoList";
import List from "./components/List";
import TeaSet from "./components/TeaSet";
import CurlyBraces from "./component/CurlyBraces";
import UITreeConcept from "./component/UITreeConcept";
export default function App() {
  return (
    <>
      <TodoList />
      <Gallery />
      <List />
      <TeaSet />
      <CurlyBraces />
      <UITreeConcept />
    </>
  );
}
=======
//Creating and nesting components
function Greeting() {
  return <h2>hI, Im Juan Miguel Ramirez</h2>;
}
>>>>>>> 8af5b38bc315ac63941e61e4ecc14306ac88388e

export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <FirstComponent />
      <MultiComponent />
      <MarkupExample />
      <CurlyBracesExample />
      <PropsExample />
      <ConditionalExample />
      <MultipleRenderExample />
      <PureComponentExample value={5} />
      <UITreeExample />
    </div>
  );
}
=======
      <h1>This is my React Activity</h1>
      <Greeting />
    </div>
  );
}

//writing markup with JSX
export default function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is some JSX markup.</p>
    </div>
  );
}

//Adding styles
export default function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Styled Heading</h1>
      <p style={{ fontWeight: "bold" }}>This text is bold.</p>
    </div>
  );
}

//Displaying data
export default function App() {
  const name = "Miguel";
  const age = 20;

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Conditional rendering
export default function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>✅ You are logged in!</h1> : <h1>❌ Please log in.</h1>}
    </div>
  );
}

//Rendering Lists
export default function App() {
  const fruits = ["Apple", "banana", "Orange"];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruits, i) => (
          <li key={i}>{fruits}</li>
        ))}
      </ul>
    </div>
  );
}


//Responding to events
export default function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}


//Updating the screen/ using hooks
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}


// App.jsx
function UserCard({ name, age }) {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Users</h1>
      <UserCard name="Luffy" age={19} />
      <UserCard name="Blackbeard" age={40} />
      <UserCard name="Shanks" age={39} />
    </div>
  );
}
>>>>>>> 85ca4fa5bff2a708a40484355d93dc72a417e094
>>>>>>> 8af5b38bc315ac63941e61e4ecc14306ac88388e
