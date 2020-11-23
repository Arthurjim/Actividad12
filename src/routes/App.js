import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../container/Home';
import Modelado from '../container/Modelado';
import Registros from '../container/Registro';
import Topicos from '../container/Topicos';

const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/Modelado" component={Modelado} />
      <Route exact path="/Topicos" component={Topicos} />
      <Route exact path="/Registros" component={Registros} />
    </Switch>  
  </BrowserRouter>
  )
}
export default App;