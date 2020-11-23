import React from 'react';
import InfoUniversidad from '../components/InfoUniversidad'
import Header from '../components/Header'
import '../assets/styles/Home.scss';
import Background from '../assets/static/fondo.jpg'
const Home =()=>{
  var backgrundStyle ={
  
    backgroundImage: `url("${Background}")`
  }
  return(
    <div className="container"  >
      <Header/>
      <div className="InfoUniversidad" style={backgrundStyle}>
      <InfoUniversidad/>
      </div>
      
    </div>
  ) 
}

export default Home;