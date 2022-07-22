import React from 'react'
import MovieList from './MovieList'

const Home = ({ movies, setMovies, movieList }) => {
  return (
    <div style={{backgroundColor: "#ABC9FF"}}>
      <h1 style={{margin: "0px", paddingTop: "20px"}}>Welcome To World Of Movies!</h1>
      <MovieList movies={movies} setMovies={setMovies} movieList={ movieList }/>
    </div>
  )
}

export default Home