import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./shared/components/TopBar.js";
import Home from "./shared/pages/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
