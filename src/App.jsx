import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./styles.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { ResearchDetails } from "./components/Research/ResearchDetails";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:id" element={<ResearchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
