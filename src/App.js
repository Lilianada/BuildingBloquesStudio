import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./page";
import Contact from "./page/Contact";
import About from "./page/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SinglePage />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
