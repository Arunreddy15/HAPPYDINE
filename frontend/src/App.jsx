import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import your page components
// import Dashboard from "./pages/Dashboard";
// import ForgotPassword from "./pages/ForgotPassword";
import { AnimatePresence } from "framer-motion";
import LaunchPage from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PageWrapper from "./components/wrapper";
import "./App.css"
function App() {
  
  return (
    <>
    <Router>
      <AnimatePresence mode="wait">
      <Routes>
        {/* Default route → redirect to login */}
        <Route path="/" element={<PageWrapper><LaunchPage/></PageWrapper>} />

        {/* Auth routes */}
        <Route path="/UserLogin" element={<PageWrapper><Login/></PageWrapper>} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

        {/* Protected routes (after login) */}
        <Route path="/UserRegister" element={<PageWrapper><Register/></PageWrapper>} />
        <Route path="/About" element={<PageWrapper><About/></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact/></PageWrapper>} />
        {/* 404 Fallback */}
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes></AnimatePresence>
    </Router>
    </>
  )
}

export default App
