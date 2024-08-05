import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/pages/NavBar';
import Recommendations from './Components/pages/Recommendations';
import Applications from './Components/pages/Applications';
import Home from './Components/pages/Home';

function App() {

  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recommend" element={<Recommendations/>} />
          <Route path="/apps" element={<Applications/>} />
        </Routes>
      </>
    )
}

export default App;
