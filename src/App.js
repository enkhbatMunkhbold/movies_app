import React, { useState, useEffect } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState(null)

  console.log(process.env.MY_API_KEY)

  const { MY_API_KEY } = process.env
  console.log('MY_API_KEY:', MY_API_KEY);

 
  const handleAddMovie = (m) => {
    console.log("Handle movie:", m);
    const movieData = {
      name: m.Title,
      img_link: m.Poster,
      genre: m.Genre,
      year: m.Year,
      rating: m.Ratings[0].Value
    }

    console.log("MovieData:", movieData);
    console.log('Movies:', movies);

    fetch(`http://localhost:3001/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(movieData)
    }).then( res => res.json())
      .then(data => setMovies([...movies, data]))
  }
  
  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, []) 

  const handleSubmit = (e) => {
    e.preventDefault()
   
    fetch(`http://www.omdbapi.com/?t=${searchMovie}&apikey=${MY_API_KEY}`)
    .then(res => res.json())
    .then(movieData => {
      console.log('Search Movie:', movieData);
      handleAddMovie(movieData)
    })    
  }

  return (
    <Router>
      <Navbar 
        handleSubmit={handleSubmit} 
        setSearchMovie={setSearchMovie} 
      />
      <Routes>
        <Route path="/" element={<Home movies={ movies }/>} />
        <Route path="/movies/new" element={<NewMovie />} />
      </Routes>      
    </Router>
  );
}

export default App;
