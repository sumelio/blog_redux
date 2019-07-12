import React from "react";
import { Link } from "react-router-dom";

const Menu = props => (
  <nav id="menu">
    <Link to="/">Users</Link>
    <Link to="/tareas">Task</Link>
  </nav>
);

export default Menu;
