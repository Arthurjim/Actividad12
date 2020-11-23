import React,{useState, useEffect} from 'react';
import Header from '../components/Header'
import TablaAlumnos from '../components/TablaAlumnos';
import FormAlumnos from '../components/FormAlumnos';
import '../assets/styles/Registos.scss';
import Background from '../assets/static/fondo.jpg'
const Registros =()=>{
  var backgrundStyle ={
  
    backgroundImage: `url("${Background}")`
  }
  return(
    <div className="containerRegistros">
      <Header />
     
      <div className="Registos" style={backgrundStyle}>
        <TablaAlumnos/>
        <FormAlumnos/>
      </div>
    </div>
  )
}
export default Registros;