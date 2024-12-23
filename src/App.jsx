import React, { useState } from 'react';
import './App.css';
import Navbar from './compounent/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/video/Video';


function App() {
  const[slide,setSlide] = useState(true);

  return (
    <div>
      <Navbar setSlide={setSlide}/>
      <Routes>
        <Route path='/' element={<Home slide={slide}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App;
