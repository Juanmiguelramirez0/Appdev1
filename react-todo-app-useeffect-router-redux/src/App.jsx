import { BrowserRouter, Routes, route } from "react-dom-router";
import Home from './src/pages/home';
import Login from './src/pages/login';
import todos from './src/pages/todos';

export default function app () {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={< Home />} />
        <Routes path="/login" element={< Login />} />
        <Routes path="/todos" element={< Todos />} />

      </Routes>
    </BrowserRouter>
  )
}
