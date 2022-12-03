import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ResNavbar from './component/ResNavbar';






function App() {
  return (
    <div>

      <BrowserRouter>

        <ResNavbar></ResNavbar>

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
