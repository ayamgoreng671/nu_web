import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ayam from './Ayam.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";
// import App from "./App";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
        <App/>
        {/* <Ayam/> */}
        <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
