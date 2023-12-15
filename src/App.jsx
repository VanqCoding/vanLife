import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import Footer from './components/Footer/Footer';
import VanDetail from './components/Vans/VanDetail';
import Layout from './components/Layout';
import Host from './components/Host/Host';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import "./server"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<Host />} >
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App
