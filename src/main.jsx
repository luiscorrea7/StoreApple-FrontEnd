import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterAD } from './components/footerPage/FooterAD.modules'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './Pages/errorPage/Error404.module';
import NavbarComp from './components/navbar-Component/NavbarComp.modules';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Elementos estaticos (Navbar, Footer, etc) afuera de Routes */}
        <NavbarComp path='*' element={<NavbarComp />} />
      <Routes>
        {/* Diferentes vistas(Route) adentro de Routes*/}
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);
