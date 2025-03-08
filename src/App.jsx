
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import './App.css'
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );   
  

}

export default App;
