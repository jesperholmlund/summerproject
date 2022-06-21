import logo from "./logo.svg";
import "./App.css";
import Fetch from "./components/Fetch";
import "spectre.css";

function App() {
  return (
    <div className="App" style={{ width: "800px", margin: "auto" }}>
      <Fetch></Fetch>
    </div>
  );
}

export default App;
