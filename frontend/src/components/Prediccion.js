import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h2 class="titleG">Simula el valor de tu matrícula</h2><br/>
          <h5>A continuación ingrese su puntaje obtenido por cada competencia:</h5><br/>
        </div>

        
          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-3 mb-3">Seleccione el tipo de colegio en que se graduó<br/>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tipo-colegio" value="0" required/>
                  <label class="form-check-label" for="tipo-colegio">Colegio público</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tipo-colegio" value="1" required/>
                  <label class="form-check-label" for="tipo-colegio">Colegio privado</label>
                </div>
              </div>
              <div class="col-md-3 mb-3 ">
                <label for="mensualidad">Ingrese el valor mensual de la pensión pagada en el último año escolar y el año de graduación</label>
                <input placeholder="Valor de la pensión" type="text" class="form-control" id="mensualidad" pattern="[0-9]*" required/>
                <div class="invalid-feedback">
                  Por favor ingrese un valor numérico
                </div>
                <br/>
                <input placeholder="Año de graduación" type="text" class="form-control" id="anio" pattern="[0-9]*" required/>
                <div class="invalid-feedback">
                  Por favor ingrese un valor numérico
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="estrato">Ingrese el estrato de la vivienda de origen</label>
                <input type="text" class="form-control" id="estrato" pattern="[0-9]*" required/>
                <div class="invalid-feedback">
                  Por favor ingrese un valor numérico
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="ingresos">Digite los ingresos anuales del núcleo familiar</label>
                <input type="text" class="form-control" id="ingresos" pattern="[0-9]*" required/>
                <div class="invalid-feedback">
                  Por favor ingrese un valor numérico
                </div>
              </div>
            </div>
              <button class="btn btn-primary botonClic" type="submit" id="oraculo">Simular</button>
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
 
export default Contact;