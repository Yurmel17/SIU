import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h2 class="titleG">¿Paso a la carrera que quiero?</h2><br/>
          <h5>A continuación seleccione ingrese su puntaje obtenido por cada competencia y la carrera de su preferencia:</h5>
        </div>
        <br/>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-1 mb-1">
              <label for="puntajeCN">CN</label>
              <input type="text" class="form-control" id="puntajeCN" pattern="[0-9]*" required/>
              <div class="invalid-feedback">
                Por favor ingrese un valor numérico
              </div>
            </div>
            <div class="col-md-1 mb-1">
              <label for="puntajeLC">LC</label>
              <input type="text" class="form-control" id="puntajeLC" pattern="[0-9]*" required/>
              <div class="invalid-feedback">
                Por favor ingrese un valor numérico
              </div>
            </div>
            <div class="col-md-1 mb-1">
              <label for="puntajeMA">MA</label>
              <input type="text" class="form-control" id="puntajeMA" pattern="[0-9]*" required/>
              <div class="invalid-feedback">
                Por favor ingrese un valor numérico
              </div>
            </div>
            <div class="col-md-1 mb-1">
              <label for="puntajeSC">SC</label>
              <input type="text" class="form-control" id="puntajeSC" pattern="[0-9]*" required/>
              <div class="invalid-feedback">
                Por favor ingrese un valor numérico
              </div>
            </div>
            <div class="col-md-1 mb-1">
              <label for="puntajeIN">IN</label>
              <input type="text" class="form-control" id="puntajeIN" pattern="[0-9]*" required/>
              <div class="invalid-feedback">
                Por favor ingrese un valor numérico
              </div>
            </div>
            
            <button class="btn btn-primary paso" type="submit" id="oraculo">¿Paso?</button>
          </div>
        </form>
        <br/>
        <div class="container">                                         
            <div class="dropdown botonDrop">
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
              <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
        </div>

        <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
          
          'use strict',
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
          }, false)
          
        })();
        </script>
      </div>
    );
  }
}
 
export default Stuff;