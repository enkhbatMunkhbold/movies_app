import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, []) 

  const handleSubmit = (e) => {
    console.log("e.target:", e.target);
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?t=${searchMovie}&apikey=19546fcd`)
    .then(res => res.json())
    .then(movieData => {
      setSearchMovie(movieData)
      setMovies([...movies, searchMovie])
    })
  }
  console.log('Movies:', movies);

  return (
    <Router>
      <Navbar handleSubmit={handleSubmit} setSearchMovie={setSearchMovie}/>
      <Routes>
        <Route path="/" element={<Home movies={ movies }/>} />
        <Route path="/movies/new" element={<NewMovie />} />
      </Routes>      
    </Router>
  );
}

export default App;
