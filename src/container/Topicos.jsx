import React from 'react';
import Header from '../components/Header';
import Requerimientos from '../assets/static/requerimientos.png'
import Costo from '../assets/static/costo.png';
import '../assets/styles/Topicos.scss';
import Background from '../assets/static/fondo.jpg'
const Topicos = () => {
  var backgrundStyle ={
  
    backgroundImage: `url("${Background}")`
  }
  return (
    <div className="containerTopicos">
      <Header />
      <div className="tecnologias" style={backgrundStyle}>
        <div className="tecnologias__info">
          <h2>Costo Beneficio Tecnologías Emergentes</h2>

          <h2>Punto de Venta</h2>
          <p>
            Maneja una excelente interfaz para poder llevar su operación en el punto de venta con los
            diferentes tipos de servicios: rápido, comedor, a domicilio y drive thru, contando con opciones
            y funciones como:
            <br />
          </p>
          <ul>
            <li> Juntar cuentas</li>
            <li> Dividir cuentas</li>
            <li>Cambio de mesero</li>
            <li> Cambiar cuentas</li>
            <li>Reapertura de cuentas</li>

          </ul>

          <h3>Inventarios</h3>
          <p>
            Ademas de todos los beneficios que se mencionaron anteriomente, uno de los mas importantes a la hora de adquirir un punto de venta
            es el manejo de inventarios ya que los inventarios son la parte más importante de un restaurante,
            el manejo correcto de éstos le ayudará a reducir la merma e incrementar sus ganancias.

            Podrá dar de alta a sus proveedores, las presentaciones de sus insumos, manejar stock mínimo y máximo,
            registrar las compras, control de sus recetas, producción de insumos, explosión de productos y poder generar
            reportes como existencias, traspasos de almacén y muchos más, lo cuál generará una correcta rotación y la
            reducción de mermas.

            </p>
          <h3>Requerimientos del sistema</h3>
          <img src={Requerimientos} alt="requerimientos" />
          <h3>Enlace punto a punto</h3>
          <p>
            En caso de que la empresa requiera interconexiones en distintas sucursales será necesario realizar
            enlaces punto a punto, esto para administrar de manera uniforme la información que se esta esta transimitiendo
          en las diferentes empresas.<br />
          Para que esto funcione, es necesario.
          </p>
          <h3>Costo total con todo lo necesario</h3>
          <img src={Costo} alt="Costo-beneficio" />
          <br />
          <br />
          <hr />
          <h2>Internet de las Cosas</h2>

          <h3> Mejorar los costos operativos</h3>
          <p>
            Las soluciones del IoT pueden ayudarte como empresario a reducir costos y mantener una ventaja competitiva frente a tus rivales de negocio. En las industrias manufactureras, los dispositivos IoT pueden usarse para monitorear equipos y minimizar el tiempo de inactividad al predecir fallas o desalineaciones en la línea de producción. Las empresas también pueden ahorrar en costos de energía y mejorar la eficiencia eléctrica mediante el uso de IoT y sistemas de construcción inteligente para monitorear y controlar el uso innecesario de los sistemas eléctricos. O controlar y evitar problemas de logística si te dedicas al comercio electrónico.



            También te interesa leer: Las etapas de Internet de las Cosas en la manufactura

          </p>
          <h3>Conocer a tu cliente</h3>
          <p>
            Comprender los gustos y el comportamiento de tus clientes es la clave para el éxito de cualquier negocio, especialmente en el sector minorista. Con sensores y otros equipos del IoT, tu empresa puede recopilar, monitorear y analizar datos de consumo, redes sociales, dispositivos móviles e internet.

            Esto permitirá a los analistas de datos predecir preferencias y tendencias para que las organizaciones puedan diseñar productos y ofrecer servicios personalizados de valor agregado para crear fidelidad y aumentar las compras. Con acceso a perfiles de clientes en profundidad, tu negocio podrá retener a los consumidores objetivo y fomentar la lealtad a la marca.
          </p>
          <h3> Mejorar productividad y eficiencia</h3>
          <p>
            No hay duda que maximizar la productividad y la eficiencia es una alta prioridad para las empresas para garantizar la rentabilidad. La tecnología es clave hoy en día. Los dispositivos del IoT pueden ayudar a las áreas de fabricación a evaluar con precisión la demanda y gestionarla de manera eficiente en varias etapas de producción a través del seguimiento en tiempo real de piezas y materias primas.
          </p>
          <h3>Costo</h3>
          <p>
            En general no se puede dar un presupuesto especifico del gasto al implementar internet de las cosas en una empresa
            Ya que exiten multpiles productos implementados en tecnologías de las cosass
            .
          </p>

        </div>
      </div>
    </div>
  )
}
export default Topicos;