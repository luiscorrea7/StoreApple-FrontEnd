import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterAD } from './components/footerPage/FooterAD.modules'
import Error404 from './Pages/errorPage/Error404.module';
import RegisterPage from './Pages/registerPage/RegisterPage';
import RecuperarContraseña from './Pages/recupContraseña/RecuperarContraseña.module';
import { HomePage } from './Pages/homePage/HomePage.module';
import NavbarComp from './components/navbarComponent/NavbarComp.modules';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Elementos estaticos (Navbar, Footer, etc) afuera de Routes */}
      <NavbarComp />
      <Routes>
        {/* Diferentes vistas(Route) adentro de Routes*/}
        <Route path="/home" element={<HomePage />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/RecCont' element={<RecuperarContraseña/>}/>
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);
