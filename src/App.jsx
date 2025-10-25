import "./App.css";
import Gallery from "./components/Gallery";
import TodoList from "./components/ToDoList";
import List from "./components/List";
import TeaSet from "./components/TeaSet";

export default function App() {
  return (
    <>
      <TodoList />
      <Gallery />
      <List />
      <TeaSet />
    </>
  );
}