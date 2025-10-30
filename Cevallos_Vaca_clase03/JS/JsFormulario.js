// Código Base
window.addEventListener("DOMContentLoaded", function(){
	const VariableJS= document.getElementById("IdControl");
	VariableJS.addEventListener("click", function(){
		let message= "Este mensaje muestra al presionar el botón. Presioname3 - Script Externo - efecutado por medio del ID del botón";
		alert(Lv_Mensaje_3);
	});
});

document.addEventListener("DOMContentLoaded", function() {
  // Al querer ingresar el nombre (focus), muestra una alerta
  const nombreInput = document.getElementById("nombre");
  nombreInput.addEventListener("click", function() {
	  let message= "Intentas ingresar tu nombre";
		alert(message);
  });

  // Al querer ingresar el email, cambia el tipo de letra
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("click", function() {
    emailInput.style.fontFamily = "Courier New, monospace";
  });

  // Al elegir una opción del select, cambia el color según el país
  const selectPais = document.getElementById("select");
  selectPais.addEventListener("change", function() {
    const valor = selectPais.value;

    switch (valor) {
      case "Ecuador":
        selectPais.style.backgroundColor = "#FFD700"; // Amarillo dorado
        break;
      case "España":
        selectPais.style.backgroundColor = "#FF4C4C"; // Rojo
        break;
      case "Brazil":
        selectPais.style.backgroundColor = "#00FF7F"; // Verde brillante
        break;
      default:
        selectPais.style.backgroundColor = ""; // Vuelve al color original
        break;
    }
  });
});
