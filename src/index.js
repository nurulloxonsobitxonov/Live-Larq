import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './pages/Sign';
import Reset from "./components/Reset"
import Account from './components/Account';
import Technology from './components/Technology';
import Shop from './pages/Shop';
import Shop2 from './pages/Shop2';
import Shop3 from './pages/Shop3';
import Shop4 from './pages/Shop4';
import Admin from "./admin/Admin"
import Register from "./pages/Register"
import { AuthContextProvider } from './context/AuthContext';
import { ProductContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='sign' element={<Sign />} />
            <Route path='reset' element={<Reset />} />
            <Route path='account' element={<Account />} />
            <Route path='technology' element={<Technology />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop2' element={<Shop2 />} />
            <Route path='shop3' element={<Shop3 />} />
            <Route path='shop4' element={<Shop4 />} />
            <Route path='register' element={<Register />} />





            <Route path='admin' element={<Admin />} />


          </Routes>
        </BrowserRouter>
      </ProductContextProvider>

    </AuthContextProvider>

  </React.StrictMode>
);


