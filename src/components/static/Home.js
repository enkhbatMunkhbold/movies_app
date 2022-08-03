import React from 'react'
import camera from '../images/clapperboard.png'

const Home = () => {  

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{margin: "0px", paddingTop: "20px", color: "blue"}}>Welcome To World Of Movies!</h1>
      <img src={camera} alt="camera..."/>      
    </div>
  )
}

export default Home