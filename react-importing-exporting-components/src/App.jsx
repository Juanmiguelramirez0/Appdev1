import Welcome from "./Welcome";
import Greeting from "./Greeting";
import { UserName, UserAge } from "./UserInfo";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Welcome />
      <Greeting />
      <UserName />
      <UserAge />
    </div>
  );
}


export default App;

