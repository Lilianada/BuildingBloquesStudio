import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SinglePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
