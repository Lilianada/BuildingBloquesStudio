import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Custom404 from "./page/404";
import TemplatePage from "./components/template";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/template/:id" element={<TemplatePage />}></Route>
          <Route path="*" element={<Custom404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
