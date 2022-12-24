LOGROS = {
	"PRIMERAVEZ":["!PRIMERA VEZ AQUI!", 
		"¡Has desbloqueado la nieve en la pantalla!",
		"snow_day.gif"],

	"DIANIEVE":["!DIA DE NIEVE!", 
		"¡CORRIDA ANCESTRAL!",
		"snow_day.gif"],

	"GAY":["Eri gay?", 
		"Ahora en serio, eres gay? A ver, no me pasa nada con los gays, tengo amigos gays pero... ? sus",
		"snow_day.gif"],

	"ROOBCRACK":["Ruben Martinez Martinez", 
		"Eres un seguidor afaz del verdadero alphasnipper",
		"snow_day.gif"],

	"SUCKMYLEG":["Juan Ageitos Bonaldi", 
		"Seguidor del volumen",
		"snow_day.gif"]
};

function logroHtml(name, comment, gif, date, id="logro"){
		return '<div onclick="executeLogroFun();" id="'+id+'" class="logros">'+
		'<div class="logros_header">'+
		'<div>'+
		'<img class="loguito" src="../Gifs/'+gif+'">'+
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

	var element = logroHtml(data[0], data[1], data[2], date, "logroFloat");
	
	document.getElementById("spawnableField").innerHTML += element;

	document.getElementById("logroFloat").style.right = "0px";

	setTimeout(function(){document.getElementById("logroFloat").style.top = "000px";}, 1000);
	setTimeout(function(){document.getElementById("logroFloat").style.top = "-300px";}, 7000);
	setTimeout(function(){document.getElementById("logroFloat").remove();}, 10000);
}

function showLogros() {
	try{
		var content = document.getElementById("logrosContent");
		content.innerHTML = "";
		for(var logro of getLogrosDone()){
			var data = LOGROS[logro[0]];

			content.innerHTML += logroHtml(data[0], data[1], data[2], logro[1]);
		}
	}catch{}
}

function getLogrosDone(){
	return JSON.parse(SETTINGS.logros);
}

function checkLogroRunned(name){
	for(var logro of getLogrosDone()){
		console.log(logro, name);
		if (logro[0] == name) {return true;}
	}
	return false;
}

function runLogro(name){
	if(!checkLogroRunned(name)){
		var date = new Date().getTime();
		var logros = getLogrosDone();
		logros.push([name, date]);

		change("logros", 
			JSON.stringify(logros)
			);
		displayFloatingLogro(name, date);

		showLogros();

		//musicStart();	

		setupSongModes();

		reloadModes()();
	}
}

ONLOADS.push(function(){showLogros();});