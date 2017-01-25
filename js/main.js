var lista = document.getElementById("listaTareas");
function crearTareas(container,tarea)
{
	var div=document.createElement('div');
	div.className="list , checkbox , option animated fadeInUp";
	var icono=document.createElement('i')
	icono.className="fa , fa-trash-o , icono , pull-right";
	var label=document.createElement('label'); 
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	div.appendChild(icono);
	container.appendChild(div);	
	icono.addEventListener('click', eliminar); 
	checkbox.addEventListener("click", chequear);
}
function aniadir()
{
	var tarea = document.getElementById("tarea");
	if(tarea.value.length == 0 )
		alert("Debes ingresar una tarea");
	else
		crearTareas(lista,tarea.value);

	tarea.focus();
	tarea.value="";
}
function eliminar(evt)
{
    lista.removeChild(evt.target.parentNode);  
}
function chequear(evt)
{
	var hijo=evt.target.parentNode;
	if(evt.target.checked)
		hijo.setAttribute("style","text-decoration:line-through");
	else
		hijo.setAttribute("style","text-decoration:none");
}