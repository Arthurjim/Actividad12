import React from 'react';
import '../assets/styles/components/InfoUniversidad.scss';
import backgrounds from '../assets/static/universidad.jpg'

const InfoUniversidad = () => (
  <>
    <div className="Universidad" >
      <div className="info">
        <h2>Universidad Tecnologíca del Norte de Aguascalientes</h2>
        <h3>Carrera: Ingeniería en Tecnologías de la Información</h3>
        <ul>
          <li>María De Jesús Zambrano</li>
          <li>Rosa Judtih Peña Cuevas</li>
          <li>Adan Rodriguez Silva</li>
          <li>José Leonel de Luna</li>
          <li>Arturo Jiménez Reyes</li>

        </ul>
      </div>
    </div>
    <div className="Maestro">
      <img src={backgrounds} alt=""/>
      <h3>MAESTRO. PROF. YEIVI JARA RUIZ</h3>
      <h4>Materias</h4>
      <ul>
        <li>Desarrollo Web.</li>
        <li>Modela de Procesos de Negocios.</li>
        <li>Tópicos Selectos de T.I.</li>
      </ul>
    </div>
  </>
)

export default InfoUniversidad;