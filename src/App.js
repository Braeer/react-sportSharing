import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import About from './pages/About/About';
import NotFound from './pages/NotFound.jsx';
import Cars from './pages/Cars';

import Header from './components/Header';

import './scss/app.scss';
import LoginPage from './pages/Autorization/login/Login.jsx';
import RegisterPage from './pages/Autorization/register/Register.jsx';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="cars" element={<Cars />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<LoginPage />} />
          <Route path="sign-up" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
