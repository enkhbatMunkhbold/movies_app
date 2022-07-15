import React from 'react'
import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {    
  console.log(movies);
  const movieCards = movies.map(m => {
      return <MovieCard key={m.id} movie={m}/>
  })

  return (
    <div>{movieCards}</div>
  )
}

export default MovieList