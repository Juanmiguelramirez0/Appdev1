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
        as a future software developer.
      </p>
    </div>
  );
}

export default App;
