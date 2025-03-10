import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageSelector from "./Components/Pages/GetStarted";
import Welcome from "./Components/Pages/WelcomeFlow";
import Lesson from "./Components/Pages/Lessons/Lesson";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<LanguageSelector />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/lesson" element={<Lesson />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
