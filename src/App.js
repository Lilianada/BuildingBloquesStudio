import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
