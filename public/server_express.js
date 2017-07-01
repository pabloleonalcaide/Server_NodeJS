/** 
* @author Pablo León Alcaide
* @version 1.0
*/


var express = require('express'); // Llamamos al paquete express para obtener sus funcionalidades.


var applications = express(); //guardamos las funciones en la variable applications


applications.use('/public/css', express.static(__dirname + '/css')); //indicamos la ruta de los estaticos (/css, /img, /js..)

/*llamamos al index
utilizamos el método get de express, de modo que reaccione al entrar
en la raíz del dominio, cargando nuestro index */
applications.get('/',function(req, resp){
	resp.sendFile(__dirname + '/index.html');
});
/*
Get usa un callback en el que recibe objects para dar las respuestas (response) 
y obtener solicitudes (request), sólo queremos que envie un mensaje, así que
usamos el objeto response y a su vez el método send para enviar el mensaje.
----
Hace falta que el servidor se inicie en el puerto 9000, y lance un mensaje
confirmación si lo hace
*/
applications.listen(9000, function(){
	console.log('Server is running!');
})
