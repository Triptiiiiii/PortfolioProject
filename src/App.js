import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
