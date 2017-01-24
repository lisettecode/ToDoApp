(function(){
	// Variables
	var lista = document.getElementById("lista");
		tareaInput = document.getElementById("tareaInput");
		btnNuevaTarea = document.getElementById("btn-agregar");
 
	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value;
			nuevaTarea = document.createElement("li");
			enlace = document.createElement("a");
            checkbox = document.createElement("input")
            checkbox.type="checkbox";
            checkbox.className = "check";
            icon = document.createElement("i");
            icon.className = "fa fa-trash-o pull-right"; 
			contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
 
		// Agregamos el contenido al enlace
		enlace.appendChild(checkbox);
        enlace.appendChild(contenido);
		// Le establecemos un atributo href
        enlace.setAttribute=("href","#");
		//enlace.type="checkbox";//
        enlace.appendChild(icon);
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
    
 
		tareaInput.value = "";
        
        for (var i = 0; i <= lista.children.length -1; i++) {
			icon.parentNode.addEventListener("click", function(){
				var elim = nuevaTarea.parentNode;
                this.parentNode.removeChild(this);
			});
		}
 
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Eventos
 
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
 
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		icon.parentNode.addEventListener("click", eleminarTarea);
	}
}());



 /*Function adicionar (lista, tarea) {
        var total=0; total++;
        var list = document.createElement("li");
        list.id="doTask";
        var checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.id="check";
        var texto= document.createElement("span");
        texto.id="task";
        var icon = document.createElement("i");
        icon.className="fa fa-trash-o";
        
        list.appendChild(checkbox);
        list.appendChild(texto);
        list.appendChild(icon);
        lista.appendChild(list);
        tareaInput.focus();
        tareaInput.value="";
        
    }

var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

var btnNuevaTarea = document.getElementById("btn-agregar");    
btnNuevaTarea.addEventListener("click", adicionar);*/

