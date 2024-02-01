import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/MUINavbar/Navbar.jsx';
import Table from "./html/Table.jsx";
import UserProfilePage from './Components/UserProfileCard/UserProfilePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
        <Route path="/userdata" element={<App/>} />
        <Route path="/schedule" element={<Table/>} />
        <Route path="/profile" element={<UserProfilePage/>} />
        <Route path="/navbar" element={<Navbar/>} />  
    </Routes>
    
  </BrowserRouter>
)
