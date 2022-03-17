import React, { Component } from "react";
import dedo from "../imgs/dedo.png"



class Home extends Component {
  render() {
    
    return (
      <div class="container">
        <div class="card centerHome marginTable">
            <div class="card-body">
              <h4 class="card-title titles">¿No sabes a qué carrera pasar?</h4>
              <p class="card-text">Ingresa tu puntaje obtenido en el icfes para conocer en qué carreras de la UIS tienes posibilidad de entrar.</p>
              <a href="#/oraculo-global" class="btn btn-primary botonClic"><img src={dedo} alt="dedo" width="50" height="50"/> Más información</a>
            </div>
        </div>

        <div class="card centerHome marginTable">
            <div class="card-body">
              <h4 class="card-title titles">¿Quieres saber si pasas a la carrera que quieres?</h4>
              <p class="card-text">Ya sabes qué estudiar, pero quieres saber si tienes chance o no de entrar a la UIS.<br/></p>
              <a href="#/oraculo-carrera" class="btn btn-primary botonClic"><img src={dedo} alt="dedo" width="50" height="50"/>Más información</a>
              
            </div>
        </div>

        <div class="card marginTable">
            <div class="card-body">
              <h4 class="card-title titles">Simula tu valor de matrícula</h4>
              <p class="card-text">¡Bien!, ahora que sabes que tienes posibilidad, puedes consultar en cuánto puede salir el valor de tu semestre.</p>
              <a href="#/prediccion" class="btn btn-primary botonClic"><img src={dedo} alt="dedo" width="50" height="50"/>Más información</a>
            </div>
        </div>
      </div>
            
    );
  }
}
export default Home;

 
