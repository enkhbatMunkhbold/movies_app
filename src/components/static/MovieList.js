import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MovieCard from "./MovieCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MovieList = ({ movies, setMovies, movieList, setFilteredMovies }) => {  

  const handleUpdate = (movieObject) => {
    const list = movieList.map(m => m.id === movieObject.id ? movieObject : m)
    setMovies(list)
    setFilteredMovies(list)
  }

  const handleRemoveMovie = (id) => {
    const updatedList = movies.filter(m => !(m.id === id))
    setMovies(updatedList)
    setFilteredMovies(updatedList)
  }

  const movieCards = movieList.map(m => {
      return (
        <Grid key={m.id} item xs={3}>
          <Item>
            <MovieCard 
              key={m.id} 
              movie={m}  
              handleUpdate={handleUpdate}  
              handleRemoveMovie={handleRemoveMovie}
            />
          </Item>
        </Grid>
      )
  })

  return (
    <div>
      <h1 style={{ padding: "10px 20px", color: "blue"}}>List Of Movies!</h1> 
      <Box sx={{ flexGrow: 1 }} style={{ paddingTop: "10px" }}>      
        <Grid container spacing={4}>
          { movieCards }
        </Grid>
      </Box>
    </div>
    
  )
}

export default MovieList
