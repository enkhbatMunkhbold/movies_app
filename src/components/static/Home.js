import React from 'react'
import MovieList from './MovieList'

const Home = ({ movies, setMovies }) => {
  return (
    <div style={{backgroundColor: "#ABC9FF"}}>
      <h1>Welcome To World Of Movies!</h1>
      <MovieList movies={ movies } setMovies={setMovies} />
    </div>
  )
}

export default Home