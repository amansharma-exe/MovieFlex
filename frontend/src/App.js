import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  <div>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>;
}

export default App;
