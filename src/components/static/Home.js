import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clapperBoard from '../images/clapperboard.png';
import camera from '../images/video-camera.png';
import Grid from '@material-ui/core/Grid';
import posterImage from '../images/movies_poster.png';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    backgroundImage: `url(${posterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    opacity: "0.8",
    height: "850px"
  }, 
  title: {
    marginTop: "15px",
    padding: "10px auto 50px", 
    color: "#00D7FF",
    fontFamily: "Kanit, sans-serif", 
    fontSize: "80px",
    textShadow: "1.5px 0 black"
  },
  clapperBoard: {
    maxWidth: "100px",
    margin: "2rem 0 5rem 8rem"
  },
  picture: {
    maxWidth: "85px",
    margin: "2rem 8rem 5rem 0"
  }
}))

const Home = () => { 
  const classes = useStyles(); 

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img className={classes.clapperBoard} src={clapperBoard} alt="camera..."/>
        </Grid>
        <Grid item xs={8}>
          <h1 className={classes.title}>Welcome To World Of Movies!</h1> 
        </Grid>  
        <Grid item xs={2}>
          <img className={classes.picture} src={camera} alt="camera..."/>
        </Grid>              
      </Grid>  
      <Button variant="outlined" style={{color: 'light'}}>Download</Button>
    </Box>
  )
}

export default Home