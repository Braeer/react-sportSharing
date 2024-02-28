import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Main from './pages/Main'
import About from './pages/About/About';
import NotFound from './pages/NotFound.jsx';


import Header from "./components/Header";


import './scss/app.scss'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
