import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import user from "./user";

const Prueba = () => <div>hola</div>;

const App = props => (
  <BrowserRouter>
    <Menu />
    <div id="margen">
      <Route exact path="/" component={user} />
      <Route exact path="/tareas" component={Prueba} />
    </div>
  </BrowserRouter>
);

export default App;
