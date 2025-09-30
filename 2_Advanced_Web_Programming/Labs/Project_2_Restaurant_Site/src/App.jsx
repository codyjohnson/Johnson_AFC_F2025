import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from "./components/AppNavbar.jsx";
import Splash from './pages/Splash.jsx';
import Hiring from './pages/Hiring.jsx';
import Menu from './pages/Menu.jsx';
import Error from './pages/Error.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/hiring" element={<Hiring />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </>
  );
}

export default App