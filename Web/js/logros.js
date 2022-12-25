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
		"snow_day.gif"],

	"CLICK00":["Clickeador novato fetichista de pies", 
		"Clickea 5 veces pr segundo el 'Creado por ...'",
		"snow_day.gif"],

	"CLICK01":["Clickeador medio fetichista de pies", 
		"Clickea 7 veces pr segundo el 'Created by: '",
		"snow_day.gif"],

	"CLICK02":["Clickeador experto fetichista de pies", 
		"Clickea 8 veces pr segundo el 'Created by: '",
		"snow_day.gif"],

	"CLICK03":["Clickeador pro fetichista de pies", 
		"Clickea 9 veces pr segundo el 'Created by: '",
		"snow_day.gif"],

	"CLICK04":["Clickeador profesional fetichista de pies", 
		"Clickea 10 veces pr segundo el 'Created by: '",
		"snow_day.gif"],

	"CLICK05":["Clickeador master fetichista de pies", 
		"Clickea 11 veces pr segundo el 'Created by: '",
		"snow_day.gif"]
};

let LOGROSSHOWING = 0;

function logroHtml(name, comment, gif, date, id="logro", clas=""){
		return '<div onclick="executeLogroFun();" id="'+id+'" class="logros '+clas+'">'+
		'<div class="logros_header">'+
		'<div>'+
		'<img class="loguito" src="../Gifs/'+gif+'">'+
		'</div>'+
		'<div>'+
		'<h2 class="prevent-select">'+
		name+
		'</h2>'+
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
	LOGROSSHOWING += 1;

	let showing = LOGROSSHOWING;

	let idd = "logroFloat"+LOGROSSHOWING;

	var data = LOGROS[name];

	var element = logroHtml(data[0], data[1], data[2], date, idd, "logroFloat");
	
	document.getElementById("spawnableField").innerHTML += element;

	document.getElementById(idd).style.right = "0px";

	setTimeout(function(){document.getElementById(idd).style.top = (186*(showing-1))+"px";}, 1000);

	setTimeout(function(){document.getElementById(idd).style.top = "-300px";
		try{
			for(var i = showing; i <10; i++){document.getElementById("logroFloat"+i).style.top = (186*(i-2))+"px";}
		}catch{}
	LOGROSSHOWING -= 1;

	}, 7000);
	
	setTimeout(function(){document.getElementById(idd).remove();}, 10000);
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

		reloadModes();
	}
}

ONLOADS.push(function(){showLogros();});