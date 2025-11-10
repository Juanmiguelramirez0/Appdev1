<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>About Me</h1>
      <h2>Name: Juan Miguel Ramirez</h2>
      <h3>Course & Year: BS Information System - 3rd Year</h3>
      <p><strong>Fun Fact:</strong> “Anime openings are my personal hype songs—even if I don’t understand all the lyrics.” 🎶 </p>
      <p>
        I want to learn React because it is one of the most popular 
        JavaScript libraries for building user interfaces. 
        I believe mastering React will help me create modern, 
        interactive web applications and improve my skills 
      </p>
    </div>
  );
}

export default App;
=======
import FirstComponent from "./components/FirstComponent";
import MultiComponent from "./components/MultiComponent";
import MarkupExample from "./components/MarkupExample";
import CurlyBracesExample from "./components/CurlyBracesExample";
import PropsExample from "./components/PropsExample";
import ConditionalExample from "./components/ConditionalExample";
import MultipleRenderExample from "./components/MultipleRenderExample";
import PureComponentExample from "./components/PureComponentExample";
import UITreeExample from "./components/UITreeExample";

export default function App() {
  return (
    <div>
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
>>>>>>> 0986055a50f0e1ad8b2080244bfb800d3150e623
