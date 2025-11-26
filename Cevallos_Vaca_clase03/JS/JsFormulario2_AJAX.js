//Esperar a que cargue el DOM
window.addEventListener("DomContentLoaded", function() {
    //Esperar al evento submit del formulario
    const formulario = document.getElementById("frmDatos");

    //Cuando de click en submit, llamamos a la función
    formulario.addEventListener("submit", FncDatosUser);

    //--------------------------------------------------------------
    function FncDatosUser(event){
        event.preventDefault(); //evitar que se recargue/envie el formulario

        //Recuperar datos del formulario
        const nombre=document.getElementById("TxtNombre").value.trim();
		const apellido=document.getElementById("TxtApellido").value.trim();
		const email=document.getElementById("email").value.trim();
		const pais=document.getElementById("SltPais").value;
		const comentario=document.getElementById("TxtComent").value.trim();

        //Recupperamos el RadioButton por medio del Selector
		const estadoCivil= document.querySelector("input['EstCivil']:checked")?.value;
		const condiciones=document.getElementById("ChkTermino").checked;

        //Validacion anual
        if(!nombre || !apellido || !email || !pais || !comentario || !estadoCivil){
            alert("No ha ingresado todos los datos");
            return;
        }

        if(!condiciones){
            alert("Debe de aceptar los terminos y condiciones del curso");
            return;
        }

        //Simulacion de AJAX
        //Conectarse a la Base de Datos
        //Conexion ODBS -->> NombreConex - NameDataBase - UserDataBase - PasswordDataBase
        //API -->> Nos pide los valores de Transaccion -->> 
        //Diccionarios = {Clave:valor ; Claves:valor} -->> JSON

        //HTML - CSS -->> Etiqueta:Propiedad
        //                div: style.color =  blue
        //                h1: style.background = red

        //Obj en JavaScript
        const DatoUser = {
            nombre,
            apellido,
            email,
            pais,
            comentario,
            estadoCivil,
            condiciones,
        };

        console.log("Datos del Usuario han sido capturados", DatoUser);

        //Simular que la informacion ha sido enviada al servidos

        //Creamos un elemento en momento de ejecucion
        const DivSalida = document.createElement("div");
        //Programamos el elemento (insertamos los datos/valores que se presentaran en pantalla)
        DivSalida.textContent = "Enviando datos al servidor ...";
        DivSalida.style.marginTop = "15px";

        //Se da la orden de ejecucion, es decir, crea el elemento en la pagina
        formulario.appendChild(DivSalida);

        //Tiempo de espera: esto demora alrededor de 2s
        setTimeout(() => {
            //La carga de la data ('local')
            fetch("../json/AjaxFormulario2.json")
                .then(response => {
                    if(!responde.ok) throw new Error("Error al cargar el archivo .json local ");
                    return response.json;
                });
                .then(data => {
                    DivSalida.innerHTML =
                    " <h3> Datos envaidos correctamente ...</h3>
                    <p>El servidor respondio: ${data.mensaje}</p>
                    <hr>
                    <p> Nombres: ${nombre} </p>
                    <p> Apellidos: ${apellido} </p>
                    <p> Email: ${email} </p>
                    <p> Pais: ${pais} </p>
                    <p> Comentarios: ${comentario} </p>
                    <p> Estado Civil: ${estadoCivil} </p>
                    ";
                });
                .catch(error => {
                    DivSalida.innerHTML= "<p>Error: ${error.message}</p>";
                });
        }, 2000);
    }
});