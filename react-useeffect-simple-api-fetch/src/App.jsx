import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersFetch from "./component/UsersFetch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/" element={<UsersFetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
