import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Pricing from "./Components/Pricing.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import SignUp from "./Components/Signup.jsx";
import Course from "./Components/Course.jsx";



function App() {

  return (
    <BrowserRouter>
    
    
    <Routes>
        <Route path="/" element={<Home/>} index/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </BrowserRouter>
    
   

  )
}

export default App