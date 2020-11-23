import React from 'react';
import Header from '../components/Header';
import DiagramPad from '../assets/static/DiagramaPad.jpg';
import '../assets/styles/Pad.scss'
import Background from '../assets/static/fondo.jpg'
const Modelado = () => {
  var backgrundStyle ={
  
    backgroundImage: `url("${Background}")`
  }
  return (
    <div className="containerModelado">
      <Header />
      <div className="pad" style={backgrundStyle}>
        <div className="pad__info">
          <h2>Diagrama de Arquitectura de Procesos (PAD) Segundo corte.</h2>
          <p>
            En el caso de los Diagramas de Arquitectura de Procesos PAD de Segundo corte corte,
            se trata de realizar una mejora, de optimizar un proceso.

            Normalmente cuando se realiza una búsqueda sobre las técnicas de modelado, se obtienen resultados
            que representan a más de una técnica. Dichos resultados son metodologías generales con facultades
            para el modelado de procesos. Desafortunadamente, existe una gran confusión de conceptos, ya que
            las metodologías son utilizadas tanto para indicar la propia metodología como las técnicas asociadas
            a la misma.
          <br />
            <br />
          La metodología trata con situaciones problemáticas en las cuales existe un alto componente social,
          político y humano. El enfoque sistémico atiende al estudio de las relaciones que conforman numerosos
          factores de un sistema, tomando muy en cuenta la intensidad con que dichos elementos se comunican,
          al integrar una estructura organizacional determinada. Dicha metodología plantea una visión inter,
          multi y transdisciplinaria que ayuda a analizar la empresa de manera integral. Se divide en las
          siguientes etapas; reconocer y expresar la situación problemática, producir “definiciones básicas”
          de sistemas relevantes, desarrollar modelos conceptuales de los sistemas relevantes, comparar modelos
          conceptuales con la situación percibida, identificar cambios deseables y factibles, y tomar acción
          para mejorar la situación.
          <br />
            <br />
          La mejora de procesos puede venir por dos vías complementarias: cambios en ciertos aspectos del
          proceso existente, o un cambio radical del proceso (reingeniería).
        </p>
          <h3>Ejemplo PAD Segundo corte.</h3>
          <img src={DiagramPad} alt="DiagramaPad" />
        </div>
      </div>
    </div>
  )
}
export default Modelado;