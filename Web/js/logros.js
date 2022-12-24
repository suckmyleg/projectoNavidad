LOGROS = {
	"DIANIEVE":["!DIA DE NIEVE!", 
		"¡Has desbloqueado la nieve en la pantalla!",
		"snow_day.gif"]
};

function logroHtml(name, comment, gif, date){
		return '<div id="logro" class="logros">'+
		'<div class="logros_header">'+
		'<div>'+
		'<img class="loguito" src="Gifs/'+gif+'">'+
		'</div>'+
		'<div>'+
		'<h1 class="prevent-select">'+
		name+
		'</h1>'+
		'</div>'+
		'<div class="logros_date">'+
		'<strong>'+
		date+
		'</strong>'+
		'</div>'+
		'</div>'+
		'<hr>'+
		'<div class="logros_content">'+
		comment+
		'</div>'+
		'</div>';
}

function displayFloatingLogro(name, date){

}

function showLogros() {
	var content = document.getElementById("content");
	for(var logro of JSON.parse(SETTINGS.logros)){
		var data = LOGROS[logro[0]];

		content.innerHTML += logroHtml(data[0], data[1], data[2], logro[1]);
	}
}

function runLogro(name){
	change("logros", JSON.parse(JSON.parse(SETTINGS.logros).push([name, date])));
}

ONLOADS.push(function(){showLogros();});