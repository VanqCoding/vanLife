import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import Footer from './components/Footer/Footer';
import VanDetail from './components/Vans/VanDetail';
import "./server"

function App() {
  return (
    <BrowserRouter>

      <header>
        <Link to="/" className='site-logo'>#VANLIFE</Link>
        <nav className='navbar'>
            <Link to="/about" className='about'>About</Link>
            <Link to="/vans" className='vans'>Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App
