window.addEventListener("DOMContentLoaded", function(){
  /* ===================================== */
  const txtName=this.document.getElementById("txtNombre");
  txtName.addEventListener("click", function(){
    let aleta="Probando evento click";
    alert(aleta);
  });

   /* ===================================== */
  const txtCorreo= document.getElementById("txtEmail");
  txtCorreo.addEventListener("click", function(){
    txtCorreo.style.color="red";
  });

   /* ===================================== */
     const selector= document.getElementById("selectPais");
     selector.addEventListener("click", function(){
      selector.style.background="green";
     });

     /* ===================================== */
     //Cargo el formulario (valido por el ID)
     const form= document.getElementById("formRegistro");
     //Llamo a la funcion que realiza el proceso esperado
     //Como no uso preventDefault el formulario se vuelve a cargar

     //Para solucionarlo se llama a la funcion: e.preventDefualt
     form.addEventListener("submit", function(e){
      e.preventDefault();
      FncReadFormulario();
     });
});


function FncReadFormulario(){
  //Obtener o reuperar los valores del formulario
  const lv_nombre= document.getElementById("txtNombre").value.trim();
  const lv_correo= document.getElementById("txtEmail").value.trim();
  const lv_pais= document.getElementById("selectPais").value.trim();

  var mensaje="";
  if(lv_nombre === ""){
    mensaje = "Debe ingresar su nombre";
    alert(mensaje);
    return;
  }

   if(lv_correo === ""){
    mensaje = "Debe ingresar su nombre";
    alert(mensaje);
    return;
  }

   if(lv_pais === ""){
    mensaje = "Debe ingresar su nombre";
    alert(mensaje);
    return;
  }

  var lv_result= 
    "Su nombre es: " + lv_nombre + "\n" +
    "Su email es: " + lv_correo + "\n" +
    "Su pais seleccionado es: " + lv_pais + "\n" ;

    alert(lv_result)
}
