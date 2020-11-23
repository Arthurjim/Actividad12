import React,{useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
const Header = () => {
  const handlerPages=(useLocation().pathname === "/" )? "ACTIVIDAD 12" : 
                      (useLocation().pathname === "/Topicos" )?   "TOPICOS" :
                      (useLocation().pathname === "/Modelado" )?   "MODELADO" :
                      (useLocation().pathname === "/Registros" )?   "REGISTROS" :

                      "Ruta No valida"

  return (
    <header>
      <div className="Logo">
        <h1>{handlerPages}</h1>

      </div>
      <div className="Menu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Modelado">
              <li>M.P.N</li>
          </Link>
          <Link to="/Topicos">
            <li>T.S.T.I</li>

          </Link>
          <Link to="/Registros">
          <li>Regístrate</li>

          </Link>
        </ul>
      </div>
    </header>
  )
}
export default Header;