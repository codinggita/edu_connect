import React from "react";
import './App.css'
import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import UserProfilePage from "./Components/UserProfilePage.jsx";
import Feature from "./Components/Feature.jsx";
import Login from "./Components/Login.jsx";
import Pricing from "./Components/Pricing.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";



function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>

    <Footer/>
      
    </BrowserRouter>
    
   

  )
}

export default App