import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterAD } from './components/footerPage/FooterAD.modules'
import Error404 from './Pages/errorPage/Error404.module';
import RecuperarContraseña from './Pages/recuperarContraseña/RecuperarContraseña';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Elementos estaticos (Navbar, Footer, etc) afuera de Routes */}
      <Routes>
        {/* Diferentes vistas(Route) adentro de Routes*/}
        <Route path='*' element={<Error404/>}/>
        <Route path='/RecCont' element={<RecuperarContraseña/>}/>
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);
