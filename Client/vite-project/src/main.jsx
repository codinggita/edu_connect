import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
        <Route path="/userdata" element={<App/>} /> 
        <Route path="/*" element={<p>No routes found here.</p>} /> 
    </Routes>
    <Footer/>
  </BrowserRouter>
)
