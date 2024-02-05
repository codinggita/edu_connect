import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Pricing from "./Pages/Pricing.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/Signup.jsx";
import Course from "./Pages/Courses.jsx";
import Profile from "./Pages/Profile.jsx";
import Coursecontent from "./Pages/Coursecontent.jsx"
import Profilementors from "./Pages/Profilementors.jsx";
import Profilesettings from "./Pages/Profilesettings.jsx";




function App() {

  return (
    <BrowserRouter>
    
    
    <Routes>
        <Route path="/" exact element={<Home/>} />
        

        <Route path="/courses" element={<Course/>}/>
        <Route path="/courses/coursecontent" element={<Coursecontent/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/mentors" element={<Profilementors/>}/>
        <Route path="/profile/settings" element={<Profilesettings/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </BrowserRouter>
    
   

  )
}

export default App