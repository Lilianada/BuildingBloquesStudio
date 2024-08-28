import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Custom404 from "./page/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="*" element={<Custom404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
