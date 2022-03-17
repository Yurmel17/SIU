import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h2>¿A qué carrera paso?</h2><br/>
          <p>A continuación ingrese su puntaje obtenido por cada competencia:</p><br/>
        </div>
        
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
            <button class="btn btn-primary botonClic" type="submit" id="oraculo">¿Paso?</button>
          </div>
        </form>

        <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
          'use strict',
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false)
        })();
        </script>
      </div>
    );
  }
}
 
export default Stuff;