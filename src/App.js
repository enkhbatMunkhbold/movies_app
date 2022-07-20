import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])  

  // console.log(process.env.MY_API_KEY)

  // const { MY_API_KEY } = process.env
  // console.log('MY_API_KEY:', MY_API_KEY); 
 
  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, [])   

  return (
    <Router>
      <Navbar 
        movies={movies} 
        setMovies={setMovies} 
      />
      <Routes>
        <Route path="/" element={<Home movies={ movies }/>} />
        <Route path="/movies/new" element={<NewMovie />} />
      </Routes>      
    </Router>
  );
}

export default App;
