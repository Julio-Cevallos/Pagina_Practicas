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
	
	/* Aqui se hackeo al usuario a traves de un button*/
	const btn4 = document.getElementById("btnPresioname4");
	let LV_Caption = "Tu fuieste HACKEADO" ;
	let LV_Message4 = "Este botón bo tiene evento click - Externo";
	if(btn4){
		btn4.addEventListener("click", function(){
			btn4.textContent = LV_Caption;
			alert(LV_Message4);
		});
	}

	/* Metodos de JAVASCRIPT relacionado a una página HTML */
	/* 1.- Por puro ID: getElementById() */
	const LV_Titulo= document.getElementById("IdTitulo");
	LV_Titulo.textContent ="Este elemento cambio por medio del document.textContent";
	LV_Titulo.style.color="red";

	/* 2.- Por ClassName: getElementsByClassName()*/
	const items= document.getElementsByClassName("item");
	for(let i=0; i<items.length; i++){
		items[i].textContent=`Metodo #2: Este es el Párrafo #${i+1} con la clase: "item" fue modificado por el elemento getElementByClassName()`;
		items[i].style.fontWeight="bold";
	}

	/* 3.- Por TagName: getElementsByTagName()*/
	const items2= document.getElementsByTagName("p");
	for(let i=0; i<items2.length; i++){
		items2[i].style.border="3px solid black";
	}

	/* 4.- querySelector */
	const ln_selector= document.querySelector("p");
	ln_selector.style.background="lightgreen";

	/* 5.- All */
	const ln_elements= document.querySelectorAll("div");
	ln_elements.forEach((div, index) => {
		div.style.background="yellow";
		console.log(`Div ${index + 1}:`, div.textContent.trim());
	});


	/* ========= Ejemplos de la tarea ========== */
	/* DOMContentLoaded - Ya se usa el evento en la linea 12 del JS*/
	const mensaje = document.getElementById("mensaje");
	if (mensaje) {
	mensaje.textContent = "El DOM ha sido completamente cargado.";
	}

	/* load - En la linea 12 ya le decimos que lea todas las funciones (incluyendo load)*/
	const estado=document.getElementById("estado");
	if(estado){
		estado.textContent= "¡La página y sus recursor se ha cargado !";
	}

	/* visibilitychange */
	const texto= document.getElementById("estado2");
	if(document.hidden){
		texto.textContent="Pestaña oculta. Pausando tareas...";
	} else{
		texto.textContent="Pestaña visible. Reunudando tareas...";
	}

	/* readystatechange */
	const LV_ready = document.getElementById("estadoReady");
	if(LV_ready){
		LV_ready.textContent= `Estado Actual: ${this.document.readyState} `
	}

	/* fullscreenchange y fullscreenerror  */
	const btnF= document.getElementById("btnFull");
	const msgF= document.getElementById("messageFull");
	if(btnF){
		btnF.addEventListener("click", ()=>{
			document.documentElement.requestFullscreen().catch(()=>{
				if(msgF){
					msgF=textContent="Error al entrar a la pantalla completa";
				}
			});
		});
	}

	document.addEventListener("fullscreenchange", () => {
		if (msgF) {
			msgF.textContent = document.fullscreenElement
			? "Modo pantalla COMPLETA activado."
			: "SALISTE del modo pantalla completa.";
		}
	});

	document.addEventListener("fullscreenerror", () => {
		if (msgF) {
			msgF.textContent = "Ocurrió un ERROR al cambiar el modo de pantalla completa.";
		}
	});

	/* Copy, Cut and Paste */
	const campo = document.getElementById("campo");
	const accion = document.getElementById("accion");
	if (campo) {
		campo.addEventListener("copy", () => (accion.textContent = "Has copiado texto."));
		campo.addEventListener("cut", () => (accion.textContent = "Has cortado texto."));
		campo.addEventListener("paste", () => (accion.textContent = "Has pegado texto."));
	}

	/* selectionchange */
	document.addEventListener("selectionchange", () => {
		const selec = document.getSelection().toString();
		const mostrarslc = document.getElementById("slc");
		if (mostrarslc) {
			if(selec){
				mostrarslc.textContent = selec ? `Texto Seleccionado: "${selec}"` : "";
			}else{
				mostrarslc.textContent="Selecciona algo";
			}
		}
	});
});


/* unload */
window.addEventListener("unload", () => {
	console.log("Estas saliendo de la página"); //No se muestra el mensaje porque la página ya se esta descargando
});

/* beforeunload */
window.addEventListener("beforeunload", (event) => {
	event.preventDefault();
	event.returnValue= "";
});

/* scroll */
const pos= document.getElementById("contenedorScrollDiv");
const txt= document.getElementById("pst");
pos.addEventListener("scroll", () => {
	txt.textContent=`Posición del scroll: ${pos.scrollTop} px`;
})