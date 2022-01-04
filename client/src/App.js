import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Private from './Pages/Private';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/private" element={<Private />}/>

          </Routes>
    </div>
  );
}

export default App;
