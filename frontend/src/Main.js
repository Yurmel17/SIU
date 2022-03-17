import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from "./imgs/logo-SIU.png"
import Home from "./components/Home";
import OraculoCarrera from "./components/OraculoCarrera";
import OraculoGlobal from "./components/OraculoGlobal";
import Prediccion from "./components/Prediccion";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div>
          <h1 class="titleG"><img src={logo} alt="SIU" width="200" height="200"/> SIU: La guía para el primíparo</h1>
        </div>
          <ul className="header">
            <li><NavLink exact to="/">Inicio</NavLink></li>
            <div class="dropdown">
              <li><NavLink to="/oraculo">El Oráculo</NavLink></li>
              <div class="dropdown-content">
                <li><NavLink to="/oraculo-global">¿Indeciso?</NavLink></li>
                <li><NavLink to="/oraculo-carrera">A lo seguro</NavLink></li>
              </div>
            </div>
            <li><NavLink to="/prediccion">La Predicción</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/oraculo" element={<Home/>}/>
              <Route path="/oraculo-global" element={<OraculoGlobal/>}/>
              <Route path="/oraculo-carrera" element={<OraculoCarrera/>}/>
              <Route path="/prediccion" element={<Prediccion/>}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;