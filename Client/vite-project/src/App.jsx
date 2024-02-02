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
import Home from "./Components/Home.jsx";



function App() {

  return (
    <BrowserRouter>
    
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>

    </BrowserRouter>
    
   

  )
}

export default App