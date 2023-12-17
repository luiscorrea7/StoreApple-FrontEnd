import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Elementos estaticos (Navbar, Footer, etc) afuera de Routes */}
      <Routes>
        {/* Diferentes vistas(Route) adentro de Routes*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
