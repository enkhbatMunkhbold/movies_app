import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home"
import MovieList from "./components/static/MovieList";
import NewMovie from "./components/static/NewMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, []) 

  console.log(movies);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movies={ movies }/>} />
        <Route path="/movies/new" element={<NewMovie />} />
      </Routes>      
    </Router>
  );
}

export default App;
