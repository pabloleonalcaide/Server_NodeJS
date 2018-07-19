/** 
* @author Pablo León Alcaide
* @version 1.0
*/

var express = require('express'); // require the express module

var app = express();

app.use('/public/css', express.static(__dirname + '/css')); //set the statics path (/css, /img, /js..)

/* get the Index */
app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

/** Our app is listening in the port 9000 */
app.listen(9000, function(){
	console.log('Server is running!');
})
