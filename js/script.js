function anadirLista(){

	var inputFormulario = document.createElement("input");
	var botonGuardar = document.createElement("button");
	var textoBoton = document.createTextNode("Guardar");


	//asigno clases
	inputFormulario.setAttribute("id","rescatarValor");
	inputFormulario.focus();
	inputFormulario.setAttribute("placeholder","Ingresa un título...")
	inputFormulario.classList.add("input","form-control");
	botonGuardar.classList.add("boton-guardar", "btn", "btn-default");


	//asingo nodos hijos
	saveBox.appendChild(inputFormulario);
	saveBox.appendChild(botonGuardar);
	botonGuardar.appendChild(textoBoton);

	document.getElementById('rescatarValor').focus();

	//cuando presiono guarar sucede esto:

	botonGuardar.addEventListener('click', function(){

		var tituloLista = document.getElementById('rescatarValor').value;
		document.getElementById('rescatarValor').value = "";

		if(tituloLista == "" || tituloLista == null){
		alert("Por favor, ingresa un título a tu lista");
		return; 
		}

		//Aquí creo el esquema de como se imprimirá el valor del input
		var contTarea = document.getElementById('contenedor');
		var divCol = document.createElement('div');
		var texto = document.createElement('h3');
		var textoTarea = document.createTextNode(tituloLista);
		var anadirTarjeta = document.createElement('a')
		var textTarjeta = document.createTextNode("Añadir Tarjeta...");
		

		//Aquí les agregues sus respectivas clases

	
		divCol.classList.add("col-xs-4","col-ms-4","col-md-4","fondo3");
		texto.setAttribute('class','titulo-lista');

		//Asigno cada nodo con su hijo
		
		contTarea.appendChild(divCol);
		//divRow.appendChild(divCol);
		divCol.appendChild(texto);
		texto.appendChild(textoTarea);
		divCol.appendChild(anadirTarjeta);
		anadirTarjeta.appendChild(textTarjeta);



   		anadirTarjeta.addEventListener('click', function(){

	   		var textArea = document.createElement('textarea');
	   		

	   		textArea.classList.add('form-control','textarea-style');
	   		textArea.setAttribute("placeholder","Ingresa tu tarea...");
	   		//textArea.setAttribute('auto-focus');

	   		texto.appendChild(textArea);

   		})



	});

	



}