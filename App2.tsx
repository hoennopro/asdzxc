import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home1";
import About from "./components/About1";
import Contact from "./components/Contact1";
import Tabs from "./components/Tabs2";

const App: React.FC = () => {
  return (
    <Router>
      <Tabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
