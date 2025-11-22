import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersFetch from "./component/UsersFetch";
import PostsFetchAsync from "./component/PostsFetchAsync";
import TodosFetchAxios from "./component/TodosFetchAxios";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />

        <Route path="/usersfetch" element={<UsersFetch />} />

        <Route path="/postsfetchasync" element={<PostsFetchAsync />} />

        <Route path="/todosfetchaxios" element={<TodosFetchAxios />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
