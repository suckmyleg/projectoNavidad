LOGROS = {
	"DIANIEVE":["!DIA DE NIEVE!", 
		"¡Has desbloqueado la nieve en la pantalla!",
		"snow_day.gif"]
};

function logroHtml(name, comment, gif, date){
		return '<div class="logro" class="logros">'+
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
	var data = LOGROS[name];

	var element = logroHtml(data[0], data[1], data[2], date);
}

function showLogros() {
	var content = document.getElementById("logrosContent");
	for(var logro of getLogrosDone()){
		var data = LOGROS[logro[0]];

		content.innerHTML += logroHtml(data[0], data[1], data[2], logro[1]);
	}
}

function getLogrosDone(){
	return JSON.parse(SETTINGS.logros);
}

function checkLogroRunned(name){
	for(var logro of getLogrosDone()){
		if (logro[0] == name) return true;
	}
	return false;
}

function runLogro(name){
	if(!checkLogroRunned(name)){
		var date = new Date(98, 1);
		var logros = getLogrosDone();
		logros.push([name, date]);

		change("logros", 
			JSON.stringify(logros)
			);
		displayFloatingLogro(name, date);

		showLogros();
	}
}

ONLOADS.push(function(){showLogros();});