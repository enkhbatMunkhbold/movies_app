import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])  
  const[filteredMovies, setFilteredMovies] = useState([])
  const[searchGenre, setSearchGenre] = useState('')
  
  // console.log(process.env.MY_API_KEY)

  // const { MY_API_KEY } = process.env
  // console.log('MY_API_KEY:', MY_API_KEY); 
  // console.log(movies)
 
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
        setFilteredMovies={setFilteredMovies}
        setSearchGenre={setSearchGenre}
      />
      <Routes>
        <Route path="/" 
          element={
            <Home 
               setFilteredMovies={setFilteredMovies}
              setMovies={setMovies} 
              movieList={ movieList }
            />
          } 
        />
        <Route path="/movies/new" element={<NewMovie />} />
      </Routes>      
    </Router>
  );
}

export default App;
