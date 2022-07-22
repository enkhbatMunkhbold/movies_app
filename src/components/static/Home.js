import React from 'react'
import MovieList from './MovieList'

const Home = ({ setFilteredMovies, setMovies, movieList }) => {
  return (
    <div style={{backgroundColor: "#ABC9FF"}}>
      <h1 style={{margin: "0px", paddingTop: "20px", color: "blue"}}>Welcome To World Of Movies!</h1>
      <MovieList setFilteredMovies={setFilteredMovies} setMovies={setMovies} movieList={ movieList }/>
    </div>
  )
}

export default Home