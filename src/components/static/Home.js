import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import camera from '../images/clapperboard.png'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center"
  }, 
  title: {
    margin: "0px", 
    padding: "50px", 
    color: "blue",
    fontFamily: "Kanit, sans-serif", 
    fontSize: "70px"
  }
}))

const Home = () => { 
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Welcome To World Of Movies!</h1>
      <img src={camera} alt="camera..."/>      
    </div>
  )
}

export default Home