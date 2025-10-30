/* Comentarios */
// Comentarios

let LV_Message="Este es mi cuarto mensaje alert - Externo - Antes del body";
alert(LV_Message);

function mostrarAlert(){
	let LV_Message2="Este mensaje se muestra cuando se preisona el botón 'Presioname2' - Script Externo";
	alert(LV_Message2);
};

window.addEventListener("DOMContentLoaded", function(){
	/* Se usa para que el valor del ID no sea modificado */
	/* document hace referencia al HTML */
	/* getElementById busca en el HTML el ID que doy como parametro */
	const Btn3 = document.getElementById("btnPresioname3");
	Btn3.addEventListener("click", function(){
		let LV_Message3="Este mensaje se muestra cuando se preisona el botón 'Presioname3' - Script Externo - Al ejecutarse por medi de ID";
		alert(LV_Message3);
	});
	
	/* Modificar Párrafo1 del HTML*/
	let parrafo= "Este párrafo fue modificado en JS (Externo), no se modificaron las fuentes.";
	const Prf_1 = document.getElementById("prf1");
	if(Prf_1){
		Prf_1.textContent = parrafo;
	}
	
	const btn4 = document.getElementById("btnPresioname4");
	let LV_Caption = "Tu fuieste HACKEADO" ;
	let LV_Message4 = "Este botón bo tiene evento click - Externo";
	if(btn4){
		btn4.addEventListener("click", function(){
			btn4.textContent = LV_Caption;
			alert(LV_Message4);
		});
	}
});