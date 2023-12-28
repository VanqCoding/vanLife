import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import VanDetail from './components/Vans/VanDetail';
import Layout from './components/Layout';
import Host from './components/Host/Host';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanPhotos from './components/Host/HostVanPhotos';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanInfo from './components/Host/HostVanInfo';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthRequired from './AuthRequired';

/* import "./server" */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Host />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
