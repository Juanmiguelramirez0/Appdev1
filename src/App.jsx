import "./App.css";
import Gallery from "./components/Gallery";
import TodoList from "./components/ToDoList";
import List from "./components/List";
import TeaSet from "./components/TeaSet";
import CurlyBraces from "./component/CurlyBraces";

export default function App() {
  return (
    <>
      <TodoList />
      <Gallery />
      <List />
      <TeaSet />
      <CurlyBraces />
    </>
  );
}