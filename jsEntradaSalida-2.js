/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var dato = prompt("Ingrese su nombre", "");
    
    if (dato != null) {
        document.getElementById("miMensaje").innerHTML = "Hola " + dato;
    }
}

