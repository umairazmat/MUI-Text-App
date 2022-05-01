import "./App.css";
import Navbar from "./components/nvabar/Navbar";
import Textform from "./components/textform/Textform";

function App() {
  return (
    <div className="App">
      <Navbar title="Text-Util App" />
      <Textform heading="Enter Text Below in Form To Analyze" />
    </div>
  );
}

export default App;
