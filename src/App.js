import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import MovieList from "./components/static/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])  
  const[filteredMovies, setFilteredMovies] = useState([])
  const[searchGenre, setSearchGenre] = useState('All')
 
  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, [])  
  
  let movieList = (searchGenre === '' || searchGenre === 'All') ? [...movies] : filteredMovies

  return (
    <Router>
      <Navbar 
        movies={movies} 
        setMovies={setMovies}
        setFilteredMovies={setFilteredMovies}
        setSearchGenre={setSearchGenre}
      />
      <Routes>
        <Route path="/" 
          element={ <Home/> } 
        />
        <Route path="/movies"
          element={
            <MovieList
              movies={movies}
              setMovies={setMovies} 
              movieList={ movieList }
              setSearchGenre={setSearchGenre}
              setFilteredMovies={setFilteredMovies}
            />
          }
        />
        <Route 
          path="/movies/new" 
          element={
            <NewMovie  
              movies={movies} 
              setMovies={setMovies}
            />
          } 
        />
      </Routes>      
    </Router>
  );
}

export default App;
