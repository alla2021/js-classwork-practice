import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />}/>

    </Routes>
  )
}

export default App