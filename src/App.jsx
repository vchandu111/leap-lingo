import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageSelector from "./Components/Pages/GetStarted";
import Welcome from "./Components/Pages/WelcomeFlow";
import Lesson from "./Components/Pages/Lessons/Lesson";
import Learn from "./Components/Pages/Learn/Learn";
import Unit from "./Components/Pages/Learn/Unit/Unit";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<LanguageSelector />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn/guidebook/:unitId" element={<Unit />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
